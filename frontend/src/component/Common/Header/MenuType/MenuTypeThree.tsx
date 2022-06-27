/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import Book from '../../../../assets/Icon/book';
import Exit from '../../../../assets/Icon/exit';
import Grid from '../../../../assets/Icon/grid';
import { nameSlice } from '../../../../helpers/NameSlice';
import { exitRequest } from '../../../../helpers/Request';
import { removeAuth } from '../../../../store/slice/AuthSlice';
import ButtonComponent from '../../Button';

type MenuTypeThreeType = {
  isAdd: any;
  isType: boolean;
  fun: any;
};
const MenuTypeThree = ({ isAdd, isType, fun }: MenuTypeThreeType) => {
  const dispatch = useDispatch();
  const handlerClick = async (e: React.MouseEvent) => {
    localStorage.removeItem('token');
    await exitRequest();
    dispatch(removeAuth(''));
  };
  const navigate = useNavigate();
  const { name, isAdmin, isAuth } = useSelector((state: any) => state.Auth.Auth);
  if (isAuth) {
    if (isType) {
      return (
        <div className="header__menu-3">
          <ul className="header__menu-3__list-auth">
            <li className="header__menu-3__item">
              <div className="header__menu-3__item-icon-name">{nameSlice(name)}</div>
              <h3 className="header__menu-3__item-text">{name}</h3>
            </li>
            <li onClick={fun}>
              <NavLink to="/advertisement" className="header__menu-3__item">
                <div className="header__menu-3__item-icon">
                  <Book />
                </div>
                <h3 className="header__menu-3__item-text">Мои объявления</h3>
              </NavLink>
            </li>
            {isAdmin ? (
              <li onClick={fun}>
                <NavLink to="/advertisement" className="header__menu-3__item">
                  <div className="header__menu-3__item-icon">
                    <Grid />
                  </div>
                  <h3 className="header__menu-3__item-text">Админ Панель</h3>
                </NavLink>
              </li>
            ) : (
              ''
            )}
            <li onClick={handlerClick}>
              <div className="header__menu-3__item" onClick={fun}>
                <div className="header__menu-3__item-icon">
                  <Exit />
                </div>
                <h3 className="header__menu-3__item-text">Выход</h3>
              </div>
            </li>
          </ul>
        </div>
      );
    }
    return (
      <div className="header__menu-3">
        <div className="header__menu-3__content">
          <ul className="header__menu-3__list">
            <li className="header__menu-3__item" onClick={fun}>
              <ButtonComponent
                onClick={() => {
                  if (!isAdmin) {
                    navigate('/advertisement/add');
                  }
                }}
                title="Подать объявление"
                style={{ background: '#FFAC28', width: 170, height: 36 }}
              />
            </li>
            <li className="header__menu-3__item" onClick={fun}>
              <NavLink to="/">Вся лента</NavLink>
            </li>
            <li className="header__menu-3__item" onClick={fun}>
              <NavLink to="/?type=Автомобили">Автомобили</NavLink>
            </li>
            <li className="header__menu-3__item" onClick={fun}>
              <NavLink to="/?type=Аксессуары">Аксессуары</NavLink>
            </li>
            <li className="header__menu-3__item" onClick={fun}>
              <NavLink to="/?type=Мебель">Мебель</NavLink>
            </li>
            <li className="header__menu-3__item" onClick={fun}>
              <NavLink to="/?type=Одежда">Одежда</NavLink>
            </li>
            <li className="header__menu-3__item" onClick={fun}>
              <NavLink to="/?type=Спорт">Спорт</NavLink>
            </li>
            <li className="header__menu-3__item" onClick={fun}>
              <NavLink to="/?type=Техника">Техника</NavLink>
            </li>
            <li className="header__menu-3__item" onClick={fun}>
              <NavLink to="/?type=Товары для дома">Товары для дома</NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  return (
    <div className="header__menu-3">
      <div className="header__menu-3__content">
        <ul className="header__menu-3__list">
          <li className="header__menu-3__item">
            <ButtonComponent
              onClick={isAdd}
              title="Подать объявление"
              style={{ background: '#FFAC28', width: 170, height: 36 }}
            />
          </li>
          <li className="header__menu-3__item" onClick={fun}>
            <NavLink to="/">Вся лента</NavLink>
          </li>
          <li className="header__menu-3__item" onClick={fun}>
            <NavLink to="/?type=Автомобили">Автомобили</NavLink>
          </li>
          <li className="header__menu-3__item" onClick={fun}>
            <NavLink to="/?type=Аксессуары">Аксессуары</NavLink>
          </li>
          <li className="header__menu-3__item" onClick={fun}>
            <NavLink to="/?type=Мебель">Мебель</NavLink>
          </li>
          <li className="header__menu-3__item" onClick={fun}>
            <NavLink to="/?type=Одежда">Одежда</NavLink>
          </li>
          <li className="header__menu-3__item" onClick={fun}>
            <NavLink to="/?type=Спорт">Спорт</NavLink>
          </li>
          <li className="header__menu-3__item" onClick={fun}>
            <NavLink to="/?type=Техника">Техника</NavLink>
          </li>
          <li className="header__menu-3__item" onClick={fun}>
            <NavLink to="/?type=Товары для дома">Товары для дома</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuTypeThree;
