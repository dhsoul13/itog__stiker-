/* eslint-disable no-undef */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PersonIcon from '../../../../assets/Icon/person';
import ButtonComponent from '../../Button';
import SerchComponent from '../../Serch';
import MenuTypeOne from '../MenuType/MenuTypeOne';

type HeaderTypeDesktopType = {
  isAuth: boolean;
  isAdd: any;
};

const HeaderTypeDesktop = ({ isAuth, isAdd }: HeaderTypeDesktopType) => {
  const refEl = useRef<HTMLInputElement | null>(null);
  const [showSerch, setShowSerch] = useState(true);
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === '/advertisement') {
      setShowSerch(false);
    } else {
      setShowSerch(true);
    }
  }, [pathname]);

  const activeEl = useCallback(() => {
    refEl.current?.classList.toggle('active');
  }, []);

  const Auth = useSelector((state: any) => state.Auth.Auth);
  const { isAdmin } = Auth;
  return (
    <div className="header-desktop__content">
      <div className="header-desktop__img">
        <NavLink to="/">
          <img src="../img/logo.png" alt="" />
        </NavLink>
      </div>
      <div
        className={
          showSerch ? 'header-desktop__serch-conatiner' : 'header-desktop__serch-conatiner active'
        }>
        <SerchComponent style={{ width: '100%' }} classAdd="header-desktop__serch " />
      </div>
      <div className="header-desktop__button">
        {showSerch ? (
          <ButtonComponent
            onClick={isAdd}
            title="Подать объявление"
            style={{ width: '100%', background: 'rgba(255, 172, 40, 1', height: '100%' }}
          />
        ) : (
          ''
        )}
      </div>
      <div className="header-desktop__entrance">
        {isAuth ? (
          <>
            <div className="header-desktop__icon">
              <PersonIcon />
            </div>
            <h2 className="header-desktop__link" ref={refEl} onClick={activeEl}>
              Профиль
            </h2>
            <MenuTypeOne onRef={refEl.current} />
          </>
        ) : (
          <>
            <div className="header-desktop__icon">
              <PersonIcon />
            </div>
            <h2 className="header-desktop__link-v">
              <NavLink to="/form/auth">Войти</NavLink>
            </h2>
          </>
        )}
      </div>
    </div>
  );
};

export default HeaderTypeDesktop;
