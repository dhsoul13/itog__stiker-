/* eslint-disable prefer-destructuring */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-cond-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable no-shadow */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable eqeqeq */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
import { Checkbox } from 'antd';
import { Formik, Form } from 'formik';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { validateAuth } from '../../../../helpers/validate';
import Show from '../../../Common/Button/ShowInput';
import NavLinks from '../common/NavLinks';
import { users } from '../../../../helpers/data';
import { addAuth } from '../../../../store/slice/AuthSlice';
import { loginRequest } from '../../../../helpers/Request';
import SpinCastom from '../../../Common/Spin';
import AlertCompanent from '../../../Common/Alert';

interface MyFormValues {
  password: string;
  email: string;
}

const Auth = () => {
  const dispatch = useDispatch();
  const Auth = useSelector((state: any) => state.Auth.Auth);
  const { isAuth } = Auth;
  const [loading, setLoading] = useState(false);
  const initialValues: MyFormValues = {
    email: '',
    password: '',
  };
  const [showPass, setShowPass] = useState(false);
  const [showError, setShowError] = useState(false);
  const [err, setErr] = useState<boolean>(false);
  const showPassHandler = useCallback(() => {
    setShowPass(!showPass);
  }, [showPass]);
  return (
    <>
      <span className="form__alert">
        {err ? <AlertCompanent messange="Неправильно введены данные" type="error" /> : ''}
      </span>
      <div className="form__body">
        <div className="form__header">
          <h2>Hello world</h2>
          <span>Создайте аккаунт</span>
        </div>
        <NavLinks />
        <Formik
          initialValues={initialValues}
          validateOnBlur
          onSubmit={async (value: MyFormValues, { setFieldValue }) => {
            setLoading(true);
            const responce = await loginRequest(value.email, value.password);

            if (responce.status === 400) {
              setLoading(false);
              setErr(true);
              setFieldValue('password', '');
            }
            if (responce.status === 200) {
              setLoading(false);
              const data = responce.data;
              const sendData = {
                isAuth: true,
                isAdmin: data.user.isAdmin,
                name: data.user.name,
                email: data.user.email,
                id: data.user.id,
              };
              localStorage.setItem('token', data.accessToken);
              dispatch(addAuth(sendData));
            }
          }}
          validationSchema={validateAuth}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isValid,
            handleSubmit,
            dirty,
          }) => (
            <Form className="form" onSubmit={handleSubmit}>
              <div className={`p email ${values.email == '' ? '' : 'act'}`}>
                <input
                  type="text"
                  name="email"
                  className={`form__input ${touched.email && errors.email && 'err'}`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Email"
                />
                {errors.email && touched.email ? (
                  <div className="form__error">{errors.email}</div>
                ) : (
                  ''
                )}
              </div>
              <div className={`p password ${values.password == '' ? '' : 'act'}`}>
                <input
                  className={`form__input ${touched.password && errors.password && 'err'}`}
                  type={showPass ? 'text' : 'password'}
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Пароль"
                />
                <Show onClick={showPassHandler} />
                {errors.password && touched.password ? (
                  <div className="form__error">{errors.password}</div>
                ) : (
                  ''
                )}
              </div>
              <button
                disabled={isValid && !dirty}
                type="submit"
                className={`form__button ${isValid && dirty ? '' : 'err'}`}>
                Войти
              </button>
            </Form>
          )}
        </Formik>
        {loading ? (
          <div className="form__spiner">
            <SpinCastom />
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default Auth;
