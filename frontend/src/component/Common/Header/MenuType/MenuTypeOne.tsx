/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Book from '../../../../assets/Icon/book';
import Exit from '../../../../assets/Icon/exit';
import Grid from '../../../../assets/Icon/grid';
import { nameSlice } from '../../../../helpers/NameSlice';
import { exitRequest, loginRequest } from '../../../../helpers/Request';
import { removeAuth } from '../../../../store/slice/AuthSlice';

const MenuTypeOne = ({ onRef }: any) => {
  const dispatch = useDispatch();
  const handlerClick = async (e: React.MouseEvent) => {
    localStorage.removeItem('token');
    await exitRequest();
    dispatch(removeAuth(''));
  };

  const handlerClickActive = useCallback(() => {
    onRef.classList.toggle('active');
  }, [onRef]);
  const { name, isAdmin } = useSelector((state: any) => state.Auth.Auth);
  return (
    <div className="header__menu-1">
      <ul className="header__menu-1__list" onClick={handlerClickActive}>
        <li className="header__menu-1__item">
          <div className="header__menu-1__item-icon-name">{nameSlice(name)}</div>
          <h3 className="header__menu-1__item-text-name">{name}</h3>
        </li>
        <li>
          <NavLink to="/advertisement" className="header__menu-1__item">
            <div className="header__menu-1__item-icon">
              <Book />
            </div>
            <h3 className="header__menu-1__item-text">Мои объявления</h3>
          </NavLink>
        </li>
        {isAdmin ? (
          <li>
            <NavLink to="/advertisement" className="header__menu-1__item">
              <div className="header__menu-1__item-icon">
                <Grid />
              </div>
              <h3 className="header__menu-1__item-text">Админ Панель</h3>
            </NavLink>
          </li>
        ) : (
          ''
        )}
        <li onClick={handlerClick}>
          <NavLink to="/advertisement" className="header__menu-1__item">
            <div className="header__menu-1__item-icon">
              <Exit />
            </div>
            <h3 className="header__menu-1__item-text">Выход</h3>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MenuTypeOne;
