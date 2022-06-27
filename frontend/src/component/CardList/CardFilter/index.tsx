/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { tag } from '../../../helpers/data';

type CardFilterType = {
  // eslint-disable-next-line no-unused-vars
  disable?: any;
};

const CardFilter = ({ disable }: CardFilterType) => {
  const data = tag;
  const [searchParams, setSerchParams] = useSearchParams();
  const postQuery = searchParams.get('type');
  return (
    <div className="filter__content">
      {data.map((el: any) => (
        <NavLink
          key={el.id}
          to={`?type=${el.title}`}
          className={`filter__button ${el.title === postQuery ? 'is-active' : ''}`}>
          {el.title}
        </NavLink>
      ))}
    </div>
  );
};
export default CardFilter;
