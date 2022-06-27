import { message } from 'antd';
import * as yup from 'yup';

export const validate = yup.object().shape({
  name: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
  lastname: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
  password: yup.string().typeError('Должно быть строкой').required('Обязательное поле').min(6, 'Пароль должен содержать 6 символов'),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают'),
  email: yup.string().email('Введите корректный email').required('Обязательное поле'),
  check: yup.string().oneOf(['true'], 'Не совпадает').required('Обязательное поле'),
});

export const validateAuth = yup.object().shape({
  password: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
  email: yup.string().email('Введите верный email').required('Обязательное поле'),
});
