/* eslint-disable consistent-return */
import axios from 'axios';
import { logout } from '../../network/exit';
import { login } from '../../network/login';
import { registration } from '../../network/register';

export const loginRequest = async (email:string, password:string) => {
  try {
    const responce = await login(email, password);
    const data = await responce;
    return data;
  } catch (e:any) {
    return e.response;
  }
};

export const registerRequest = async (email:string, password:string, name:string) => {
  try {
    const response = await registration(email, password, name);
    const data = await response;
    return data;
  } catch (e:any) {
    return e.response;
  }
};

export const exitRequest = async () => {
  try {
    await logout();
  } catch (e) {
    return e;
  }
};

export const refreshRequest = async () => {
  try {
    const refresh = axios.get('http://localhost:5000/api/auth/refresh', {
      withCredentials: true,
    });
    const data = await refresh;
    return data;
  } catch (e) {
    return e;
  }
};
