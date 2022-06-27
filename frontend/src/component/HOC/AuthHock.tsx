/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

type AuthHocType = {
  children: React.ReactNode;
};
const AuthHOC: React.FC<AuthHocType> = ({ children }) => {
  const { isAuth } = useSelector((state: any) => state.Auth.Auth);
  if (isAuth) {
    return <>{children}</>;
  }

  return <Navigate to="/form/auth" />;
};

export default AuthHOC;
