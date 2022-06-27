/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../../../../assets/Icon/book';
import Exit from '../../../../assets/Icon/exit';
import Grid from '../../../../assets/Icon/grid';
import { nameSlice } from '../../../../helpers/NameSlice';
import { removeAuth } from '../../../../store/slice/AuthSlice';
import { exitRequest } from '../../../../helpers/Request';

const MenuTypeTwo = ({ fun }: any) => {
  const dispatch = useDispatch();
  const handlerClick = async (e: React.MouseEvent) => {
    fun();
    localStorage.removeItem('token');
    await exitRequest();
    dispatch(removeAuth(''));
  };
  const { name, isAdmin } = useSelector((state: any) => state.Auth.Auth);
  return (
    <div className="header__menu-2">
      <ul className="header__menu-2__list">
        <li className="header__menu-2__item">
          <div className="header__menu-2__item-icon-name">{nameSlice(name)}</div>
          <h3 className="header__menu-2__item-text-name">{name}</h3>
        </li>
        <li>
          <NavLink to="/advertisement" className="header__menu-2__item" onClick={fun}>
            <div className="header__menu-2__item-icon">
              <Book />
            </div>
            <h3 className="header__menu-2__item-text">Мои объявления</h3>
          </NavLink>
        </li>
        {isAdmin ? (
          <li>
            <NavLink to="/advertisement" className="header__menu-2__item" onClick={fun}>
              <div className="header__menu-2__item-icon">
                <Grid />
              </div>
              <h3 className="header__menu-2__item-text">Админ Панель</h3>
            </NavLink>
          </li>
        ) : (
          ''
        )}
        <li onClick={handlerClick}>
          <div className="header__menu-2__item">
            <div className="header__menu-2__item-icon">
              <Exit />
            </div>
            <h3 className="header__menu-2__item-text">Выход</h3>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MenuTypeTwo;
