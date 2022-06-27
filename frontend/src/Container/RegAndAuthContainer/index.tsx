import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RegAndAuthPage from '../../component/Page/RegAndAuthPage';

const RegAndAuthContainer = () => {
  const navigate = useNavigate();
  const { isAuth } = useSelector((state: any) => state.Auth.Auth);
  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth]);
  return (
    <div>
      <RegAndAuthPage />
    </div>
  );
};

export default RegAndAuthContainer;
