/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useCallback, useRef, useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import Lock from '../../../../assets/Icon/lock';
import PersonIcon from '../../../../assets/Icon/person';
import Serch from '../../../../assets/Icon/serch';
import SerchComponent from '../../Serch';
import MenuTypeThree from '../MenuType/MenuTypeThree';

type HeaderTypeMobileType = {
  isAuth: boolean;
  isAdd: any;
};
const HeaderTypeMobile = ({ isAuth, isAdd }: HeaderTypeMobileType) => {
  const [showSerch, setShowSerch] = useState(false);
  const [variable, setVariable] = useState(false);
  const { pathname } = useLocation();
  const refElem = useRef<HTMLButtonElement | null>(null);
  const activeEl = useCallback((refEl: any) => {
    if (refEl.currentTarget.tagName === 'DIV') {
      setVariable(true);
      refElem.current?.classList.toggle('is-active');
      document.querySelector('main')?.classList.toggle('hidden');
    } else {
      setVariable(false);
      refElem.current?.classList.toggle('is-active');
      document.querySelector('main')?.classList.toggle('hidden');
    }
  }, []);

  const handlerSerch = () => {
    if (pathname !== '/advertisement') {
      setShowSerch(!showSerch);
    }
  };

  const showEl = useCallback(() => {
    refElem.current?.classList.toggle('is-active');
    document.querySelector('.main')?.classList.toggle('hidden');
  }, []);

  return (
    <div className="header-mobile__content">
      <div className="header-mobile__link">
        <button
          className="hamburger hamburger--collapse"
          type="submit"
          ref={refElem}
          onClick={activeEl}>
          <span className="header-laptop__hamburger-box hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
        <div className="header-mobile__menu">
          <MenuTypeThree isAdd={isAdd} isType={variable} fun={showEl} />
        </div>
      </div>
      <div className="header-laptop__img">
        <NavLink to="/">
          <img src="../img/logo.png" alt="" />
        </NavLink>
      </div>
      <div className="header-mobile__info">
        <div className="header-mobile__icon">
          {isAuth ? (
            <div onClick={activeEl}>
              <PersonIcon />
            </div>
          ) : (
            <NavLink to="/form/auth">
              <Lock />
            </NavLink>
          )}
        </div>
        <div className="header-mobile__serch" onClick={handlerSerch}>
          <Serch />
        </div>
      </div>
      {showSerch ? (
        <div className="header-mobile__serch-input">
          <SerchComponent classAdd="header-mobile__input" />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default HeaderTypeMobile;
