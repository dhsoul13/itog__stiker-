/* eslint-disable object-curly-newline */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import Slider from '../../Common/Slider/index';
import Eye from '../../../assets/Icon/eye';
import Arrow from '../../../assets/Icon/arrow';
import SliderOther from '../../Common/SliderOther';
import SpinCastom from '../../Common/Spin';
import { PriceSlice } from '../../../helpers/PriceSlice';
import { useSelectorGet } from '../../../hooks/useDateAdd';
import AlertCompanent from '../../Common/Alert';

type OneAdvertisementPageType = {
  data: Array<any> | undefined;
  id: string | undefined;
};
const OneAdvertisementPage = ({ data, id }: OneAdvertisementPageType) => {
  const [el, setEl] = useState<any>();
  const buttonRef = useRef<any>();
  const [err, setErr] = useState<boolean>(false);
  const navigate = useNavigate();
  const { isAuth } = useSelectorGet('Auth', 'Auth');
  useMemo(() => {
    const el = data?.filter((el: any) => String(el.id) === id)[0];
    setEl(el);
  }, [data]);
  const handlerPhoneClick = () => {
    setErr(false);
    if (isAuth) {
      const teg = buttonRef.current;
      teg.classList.add('disabele');
    } else {
      setErr(true);
      setTimeout(() => {
        setErr(false);
      }, 900);
    }
  };
  if (data?.length) {
    return (
      <div className="oneadvertisemen__container container">
        <div className="oneadvertisemen__content">
          <span className="oneadvertisemen__alert">
            {err ? <AlertCompanent messange="Авторизуйтесь" type="error" /> : ''}
          </span>
          <div className="oneadvertisemen__header">
            <div className="oneadvertisemen__back">
              <NavLink to="/" className="oneadvertisemen__back-arrow">
                <Arrow />
              </NavLink>
            </div>
            <div className="oneadvertisemen__header-info">
              <div className="oneadvertisemen__info">
                <div className="oneadvertisemen__date">{el?.date}</div>
                <h2 className="oneadvertisemen__title">{el?.title}</h2>
                <h3 className="oneadvertisemen__article">{el?.article}</h3>
              </div>
              <div className="oneadvertisemen__price">
                <h3 className="oneadvertisemen__price-info">{PriceSlice(el?.price)}</h3>
                <div className="oneadvertisemen__button-container" ref={buttonRef}>
                  <Button
                    type="primary"
                    className="oneadvertisemen__button"
                    onClick={handlerPhoneClick}>
                    Показать номер
                  </Button>
                  <h3>{isAuth ? 7384738 : ''}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="oneadvertisemen__body">
            <div className="oneadvertisemen__body-info">
              <div className="oneadvertisemen__watch">
                <div>
                  <Eye />
                </div>
                <h3>{el?.watch}</h3>
              </div>
              <div className="oneadvertisemen__slider">
                <Slider imgs={el?.imgs} />
              </div>
              <div className="oneadvertisemen__slider-m">
                <Slider spaceBetween={8} imgs={el?.imgs} />
              </div>
              <div className="oneadvertisemen__price-m">
                <h3 className="oneadvertisemen__price-info">{PriceSlice(el?.price)}</h3>
                <Button
                  type="primary"
                  className="oneadvertisemen__button"
                  onClick={handlerPhoneClick}>
                  Показать номер
                </Button>
              </div>
              <div className="oneadvertisemen__description">
                <h2>Описание: </h2>
                <p>{el?.text ? el?.text : 'Нет описания'}</p>
              </div>
              <div className="oneadvertisemen__location">
                <h2 className="oneadvertisemen__location">
                  Местоположение: <span>г. {el?.city ? el.city : 'Не указано'}</span>
                </h2>
                <div>
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A10285d93812a30d0f927dd171abbc8716b3296dc217053ca96208698d1558758&amp;source=constructor"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                  />
                </div>
              </div>
              <div className="oneadvertisemen__container-date-m">
                <div className="oneadvertisemen__date-m">{el?.date}</div>
              </div>
            </div>
            <div className="oneadvertisemen__other">
              <div className="oneadvertisemen__other-comp">
                <h3 className="oneadvertisemen__other-title">Смотрите также:</h3>
                <SliderOther
                  direction="vertical"
                  el={data?.filter((el: any) => String(el.id) === id)}
                  data={data}
                />
              </div>
              <div className="oneadvertisemen__other-leptop">
                <h3 className="oneadvertisemen__other-title">Смотрите также:</h3>
                <SliderOther
                  direction="horizontal"
                  slidesPerView={3}
                  el={data?.filter((el: any) => String(el.id) === id)}
                  data={data}
                />
              </div>
              <div className="oneadvertisemen__other-mobile">
                <h3 className="oneadvertisemen__other-title">Смотрите также:</h3>
                <SliderOther
                  direction="vertical"
                  slidesPerView={2}
                  spaceBetween={16}
                  el={data?.filter((el: any) => String(el.id) === id)}
                  data={data}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="oneadvertisemen__spin">
      <SpinCastom />
    </div>
  );
};

export default OneAdvertisementPage;
