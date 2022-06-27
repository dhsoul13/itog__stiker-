import React from 'react';

type SerchCardType = {
  el: any;
};

const SerchCard = ({ el }: SerchCardType) => (
  <div className="serch__item">
    <h3 className="serch__item-title">{el.title}</h3>
    <p className="serch__item-text">{el.text ? el.text : 'Нет текста'}</p>
    <h4 className="serch__item-date">{el.date}</h4>
  </div>
);

export default SerchCard;
