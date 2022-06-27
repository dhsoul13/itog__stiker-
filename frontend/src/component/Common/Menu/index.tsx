/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-tag-spacing */
import React from 'react';
import { useDispatch } from 'react-redux';
import Book from '../../../assets/Icon/book';
import Exit from '../../../assets/Icon/exit';
import { nameSlice } from '../../../helpers/NameSlice';
import { exitRequest } from '../../../helpers/Request';
import { useSelectorGet } from '../../../hooks/useDateAdd';
import { removeAuth } from '../../../store/slice/AuthSlice';

const Menu = () => {
  const dispatch = useDispatch();
  const isAuth = useSelectorGet('Auth', 'Auth');
  const handlerExit = async () => {
    localStorage.removeItem('token');
    await exitRequest();
    dispatch(removeAuth(''));
  };
  return (
    <div className="addAdvertisement__menu-container">
      <div className="addAdvertisement__menu-content">
        <ul className="addAdvertisement__menu">
          <li className="addAdvertisement__menu-list">
            <div className="addAdvertisement__menu-content">
              <div className="addAdvertisement__menu-img">{nameSlice(isAuth?.name || '')[0]}</div>
              <div className="addAdvertisement__menu-text">
                <span>{isAuth.name}</span>
                <span>{isAuth?.isAdmin ? 'Aдмин-меню ' : 'Пользователь-меню'}</span>
              </div>
            </div>
          </li>
          <li className="addAdvertisement__menu-list">
            <div className="addAdvertisement__menu-content-icon">
              <div className="addAdvertisement__menu-img-icon">
                <Book />
              </div>
              <div className="addAdvertisement__menu-text-icon">
                <span>Объявления</span>
              </div>
            </div>
          </li>
          <li className="addAdvertisement__menu-list" onClick={handlerExit}>
            <div className="addAdvertisement__menu-content-icon">
              <div className="addAdvertisement__menu-img-icon">
                <Exit />
              </div>
              <div className="addAdvertisement__menu-text-icon">
                <span>Выход</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
