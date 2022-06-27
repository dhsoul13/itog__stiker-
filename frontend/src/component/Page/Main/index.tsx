/* eslint-disable no-shadow */
/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import CardList from '../../CardList';
import CardFilter from '../../CardList/CardFilter';
import { tag } from '../../../helpers/data';
import SpinCastom from '../../Common/Spin';

type dataType = {
  data?: Array<any>;
};
const MainPage = ({ data = [] }: dataType) => {
  const [searchParams, setSerchParams] = useSearchParams();
  const postQuery = searchParams.get('type');
  const [dataRender, setDataRender] = useState<any>(data);
  const [preloader, setPreloader] = useState(true);
  useEffect(() => {
    if (data.length) {
      const filter = tag.find((el) => el.title === postQuery);
      if (filter?.id === 0 || filter === undefined) {
        setDataRender(data);
        setPreloader(false);
      } else {
        setDataRender(data.filter((el: any) => el.teg === filter?.title));
        setPreloader(false);
      }
    } else {
      setPreloader(true);
    }
  }, [data]);
  useMemo(() => {
    const filter = tag.find((el) => el.title === postQuery);
    if (filter?.id === 0 || filter === undefined) {
      setDataRender(data);
    } else {
      setDataRender(data.filter((el: any) => el.teg === filter?.title));
    }
  }, [postQuery]);
  return (
    <>
      <div className="main__container">
        <div className="main__content container">
          <div className="main__title">
            <div className="main__title-left">
              <h1 className="main__title-text">Доска объявлений</h1>
              <p className="main__title-subtitle">
                Находи тысячи разнообразных товаров и услугот продавцов со всей страны. Безопасные
                расчеты. Удобный сервис доставки
              </p>
            </div>
            <div className="main__title-right">
              <div className="main__title-img">
                <img src="../img/basked.png" alt="" className="main__title-img-1" />
                <img src="../img/basked1.png" alt="" className="main__title-img-2" />
              </div>
              <div className="sercle-1" />
              <div className="sercle-2" />
            </div>
          </div>
        </div>
      </div>
      <div className="main__lenta">
        <div className="main__lenta-container container">
          <div className="main__lenta-content">
            <div className="main__lenta-filter">
              <CardFilter disable={!data.length} />
            </div>
            <div className={`main__preloader ${preloader ? 'active' : ''}`}>
              <SpinCastom />
            </div>
            <h2 className={`main__lenta-title ${data.length ? '' : 'active'}`}>{postQuery}</h2>
            <div className={`main__lenta-block ${preloader ? '' : 'active'}`}>
              <CardList data={dataRender} filter={postQuery} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(MainPage);
