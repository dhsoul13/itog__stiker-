import axios from 'axios';

export const refresh = axios.get('http://localhost:5000/api/auth/refresh', {
  withCredentials: true,
});
