/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable react/style-prop-object */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import HeaderTypeDesktop from './HeaderType/HeaderTypeDesktop';
import HeaderTypeLaptop from './HeaderType/HeaderTypeLaptop';
import HeaderTypeMobile from './HeaderType/HeaderTypeMobile';

const Header = () => {
  const Auth = useSelector((state: any) => state.Auth.Auth);
  const { isAuth, name } = Auth;
  const navigate = useNavigate();
  const handlerClick = () => {
    if (isAuth) {
      alert(1);
    } else {
      navigate('/form/auth');
    }
  };

  const handlerAddAdvertisememtClick = () => {
    if (isAuth) {
      navigate('/advertisement');
    } else {
      navigate('/form/auth');
    }
  };
  return (
    <header className="header">
      <div className="header__container container">
        <div className="header-desktop">
          <HeaderTypeDesktop isAuth={isAuth} isAdd={handlerAddAdvertisememtClick} />
        </div>
        <div className="header-laptop">
          <HeaderTypeLaptop isAuth={isAuth} isAdd={handlerAddAdvertisememtClick} />
        </div>
        <div className="header-mobile">
          <HeaderTypeMobile isAuth={isAuth} isAdd={handlerAddAdvertisememtClick} />
        </div>
      </div>
    </header>
  );
};

export default Header;
