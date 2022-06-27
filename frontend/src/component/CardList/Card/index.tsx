/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/require-default-props */
import React from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import Eye from '../../../assets/Icon/eye';
import { PriceSlice } from '../../../helpers/PriceSlice';
import WordHyphenation from '../../Common/WordHyphenation';

type CardType = {
  info?: any;
};
const Card = ({ info }: CardType) => (
  <li className="card">
    <NavLink className="card__body" to={`advertisements/${info.id}`}>
      <div className="card__img">
        <img src={info.titleImg ? '' : '../img/not-photo.png'} alt="photo" />
        <div className="card__teg">{info.teg}</div>
      </div>
      <div className="card__info">
        <h2 className="card__title">{info.title}</h2>
        <div className="card__subtitle">
          <WordHyphenation text={info.subtitle} />
        </div>
        <span className="card__price">{PriceSlice(info.price)}</span>
        <div className="card__info-v">
          <span className="card__date">{info.date}</span>
          <span className="card__visit">
            <Eye />
            {`${info.watch}`}
          </span>
        </div>
      </div>
    </NavLink>
  </li>
);

export default Card;
