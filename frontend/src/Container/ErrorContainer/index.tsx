/* eslint-disable react/no-children-prop */
import React from 'react';

const ErrorContainer = () => (
  <div className="error__container container">
    <div className="error__content">
      <div className="error__info">
        <h2>Упс! Кажется, на эту страницу прилег котик</h2>
        <h3>Ошибка 404</h3>
        <h4>Мы уже разбираемся, почему так получилось, скоро все починим.</h4>
      </div>
      <div className="error__info">
        <img src="../img/purr-page-not-found 1.png" alt="" />
      </div>
    </div>
  </div>
);

export default ErrorContainer;
