/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import axios, { AxiosRequestConfig } from 'axios';

export const $api = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:5000/api/auth'
});

$api.interceptors.request.use(
  (config:any) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
  }
);
$api.interceptors.response.use(
  (config) => config,
  async (err) => {
    const originalRequest = err.config;
    if (err.response.status === 401 && err.config && !err.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get('http://localhost:5000/api/auth/refresh', {
          withCredentials: true,
        });
        const data = await response.data;
        localStorage.setItem('token', data.accessToken);
        return $api.request(originalRequest);
      } catch (e) {
        return e;
      }
    }
    throw err;
  }
);
