/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-expressions */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable eqeqeq */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
import { Checkbox } from 'antd';
import { Formik, Form } from 'formik';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { validate } from '../../../../helpers/validate';
import Show from '../../../Common/Button/ShowInput/index';
import { addAuth, removeAuth } from '../../../../store/slice/AuthSlice';
import NavLinks from '../common/NavLinks';
import { registerRequest } from '../../../../helpers/Request';
import AlertCompanent from '../../../Common/Alert';
import SpinCastom from '../../../Common/Spin';

interface MyFormValues {
  name: string;
  lastname: string;
  password: string;
  confirmPassword: string;
  email: string;
  check: string;
}

const Registration = () => {
  const dispatch = useDispatch();
  const [showPass, setShowPass] = useState(false);
  const [showPassConfig, setShowPassConfig] = useState(false);
  const [err, setErr] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const showPassHandler = useCallback(() => {
    setShowPass(!showPass);
  }, [showPass]);
  const showPassConfigHandler = useCallback(() => {
    setShowPassConfig(!showPassConfig);
  }, [showPassConfig]);
  const initialValues: MyFormValues = {
    name: '',
    lastname: '',
    password: '',
    confirmPassword: '',
    email: '',
    check: '',
  };
  return (
    <>
      <span className="form__alert">
        {err ? <AlertCompanent messange="Такой пользователь уже есть" type="error" /> : ''}
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
            const dataset = {
              name: `${value.name} ${value.lastname}`,
              email: value.email,
              password: value.password,
            };
            const data = await registerRequest(dataset.email, dataset.password, dataset.name);
            if (data.status === 400) {
              setErr(true);
              setLoading(false);
              setFieldValue('email', '');
            }
            if (data.status === 200) {
              setLoading(false);
              localStorage.setItem('token', data.data.accessToken);
              const dataset = {
                isAuth: data.data.isAuth,
                isAdmin: data.data.isAdmin,
                name: data.data.name,
                email: data.data.email,
                id: data.data.id,
              };
              dispatch(addAuth(dataset));
            }
          }}
          validationSchema={validate}>
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
              <div className={`p name ${values.name == '' ? '' : 'act'}`}>
                <input
                  className={`form__input name ${touched.name && errors.name && 'err'}`}
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                  placeholder="Имя"
                  onBlur={handleBlur}
                />
                {errors.name && touched.name ? (
                  <div className="form__error">{errors.name}</div>
                ) : (
                  ''
                )}
              </div>
              <div className={`p lastname ${values.lastname == '' ? '' : 'act'}`}>
                <input
                  className={`form__input ${touched.lastname && errors.lastname && 'err'}`}
                  type="text"
                  name="lastname"
                  onChange={handleChange}
                  value={values.lastname}
                  placeholder="Фамилия"
                  onBlur={handleBlur}
                />
                {errors.lastname && touched.lastname ? (
                  <div className="form__error">{errors.lastname}</div>
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
                  value={values.password}
                  placeholder="Пароль"
                  onBlur={handleBlur}
                />
                <Show onClick={showPassHandler} />
                {errors.password && touched.password ? (
                  <div className="form__error">{errors.password}</div>
                ) : (
                  ''
                )}
              </div>
              <div className={`p configpassword ${values.confirmPassword == '' ? '' : 'act'}`}>
                <input
                  className={`form__input ${
                    touched.confirmPassword && errors.confirmPassword && 'err'
                  }`}
                  type={showPassConfig ? 'text' : 'password'}
                  name="confirmPassword"
                  onChange={handleChange}
                  value={values.confirmPassword}
                  placeholder="Повторите пароль"
                  onBlur={handleBlur}
                />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <div className="form__error">{errors.confirmPassword}</div>
                ) : (
                  ''
                )}
                <Show onClick={showPassConfigHandler} />
              </div>
              <div className={`p email ${values.email == '' ? '' : 'act'}`}>
                <input
                  className={`form__input ${touched.email && errors.email && 'err'}`}
                  type="text"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  placeholder="Email"
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <div className="form__error">{errors.email}</div>
                ) : (
                  ''
                )}
              </div>
              <div>
                <Checkbox onChange={handleChange} name="check" className="form__terms">
                  Принимаю условия <br />
                  <a href="/">Пользовательского соглашения</a>
                </Checkbox>
              </div>
              <button
                disabled={isValid && !dirty}
                type="submit"
                className={`form__button ${isValid && dirty ? '' : 'err'}`}>
                Создать аккаунт
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

export default Registration;
