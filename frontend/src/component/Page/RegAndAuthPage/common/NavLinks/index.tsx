import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => (
  <div className="form__links">
    <NavLink to="/form/reg" className="form-link">
      Регистрация
    </NavLink>
    <NavLink to="/form/auth" className="form-link">
      Авторизация
    </NavLink>
  </div>
);

export default NavLinks;
