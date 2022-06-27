/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-console */
/* eslint-disable array-callback-return */
/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from 'react';
import Repeat from '../../assets/Icon/repeat';
import Card from '../CardList/Card';

type CardListType = {
  data?: Array<any>;
  filter?: any;
};
const CardList = ({ data = [], filter }: CardListType): any => {
  const [visible, setVisible] = useState(9);
  const [visibleButton, setVisibleButton] = useState(true);
  const showMoreItem = () => {
    const check = visible + 9;
    setVisible((prev) => prev + 9);
    if (check >= data.length) {
      setVisibleButton(!visibleButton);
    }
  };
  useEffect(() => {
    setVisible(9);
    if (data.length <= 9) {
      setVisibleButton(false);
    } else {
      setVisibleButton(true);
    }
  }, [filter, data]);
  return (
    <>
      <ul className={`main__lenta-list ${data.length ? '' : 'active'}`}>
        {data.slice(0, visible).map((el) => (
          <Card info={el} key={el.id} />
        ))}
      </ul>
      <div
        className={`button__filter-more__container ${data.length ? '' : 'active'} ${
          visibleButton ? '' : 'active'
        }`}>
        <button type="button" className="button__filter-more" onClick={showMoreItem}>
          <span>
            <Repeat />
          </span>
          <h2>Загрузить еще</h2>
        </button>
      </div>
      <div className={`main__without  ${data.length ? '' : 'active'}`}>
        <h2>Пока что нет ничего</h2>
      </div>
    </>
  );
};
export default React.memo(CardList);
