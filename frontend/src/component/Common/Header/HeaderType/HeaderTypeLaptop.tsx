/* eslint-disable no-shadow */
/* eslint-disable object-curly-newline */
/* eslint-disable no-multi-spaces */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, NavLink } from 'react-router-dom';

import Lock from '../../../../assets/Icon/lock';
import PersonIcon from '../../../../assets/Icon/person';
import ButtonComponent from '../../Button';
import SerchComponent from '../../Serch';
import MenuTypeTwo from '../MenuType/MenuTypeTwo';

type HeaderTypeLaptopType = {
  isAuth: boolean;
  isAdd: any;
};

const HeaderTypeLaptop = ({ isAuth, isAdd }: HeaderTypeLaptopType) => {
  const refEl = useRef<HTMLButtonElement | null>(null);
  const { pathname } = useLocation();
  // eslint-disable-next-line no-undef
  const [showSerch, setShowSerch] = useState(true);
  const activeEl = useCallback(() => {
    refEl.current?.classList.toggle('is-active');
    document.querySelector('.main')?.classList.toggle('hidden');
  }, []);

  const showEl = useCallback(() => {
    refEl.current?.classList.toggle('is-active');
    document.querySelector('.main')?.classList.toggle('hidden');
  }, []);

  useEffect(() => {
    if (pathname === '/advertisement') {
      setShowSerch(false);
    } else {
      setShowSerch(true);
    }
  }, [pathname]);

  const Auth = useSelector((state: any) => state.Auth.Auth);
  const { isAdmin } = Auth;
  return (
    <div className="header-laptop__content">
      <div className="header-laptop__img">
        <NavLink to="/">
          <img src="../img/logo.png" alt="" />
        </NavLink>
      </div>
      <div
        className={
          showSerch ? 'header-laptop__serch-conatiner' : 'header-laptop__serch-conatiner active'
        }>
        <SerchComponent style={{ width: '100%' }} classAdd="header-laptop__serch" />
      </div>
      <div className="header-laptop__entrance">
        {isAuth ? (
          <>
            {!isAdmin ? (
              <ButtonComponent
                onClick={isAdd}
                title="Подать объявление"
                style={{ width: '100%', background: 'rgba(255, 172, 40, 1' }}
              />
            ) : (
              ''
            )}
            <div className="header-laptop__icon">
              <PersonIcon />
            </div>
            <div className="header-laptop__link">
              <button
                className="hamburger hamburger--collapse"
                type="submit"
                ref={refEl}
                onClick={activeEl}>
                <span className="header-laptop__hamburger-box hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>
              <div className="header-laptop-menu">
                <MenuTypeTwo fun={showEl} />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="header-laptop__icon">
              <Lock />
            </div>
            <div className="header-laptop__link">
              <NavLink to="form/auth">
                <button
                  className="header-laptop__hamburger-v hamburger hamburger--collaps"
                  type="button">
                  <span className="header-laptop__hamburger-box hamburger-box">
                    <span className="hamburger-inner" />
                  </span>
                </button>
              </NavLink>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HeaderTypeLaptop;
