/* eslint-disable function-paren-newline */
/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable eqeqeq */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-shadow */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import NameSliceForSlider from '../../../helpers/NameSliceForSlider';

type SliderOtherType = {
  direction: 'vertical' | 'horizontal';
  slidesPerView?: number;
  spaceBetween?: number;
  el?: any;
  data?: any;
};
const SliderOther = ({
  direction,
  slidesPerView = 2,
  spaceBetween = 24,
  el = [],
  data = [],
}: SliderOtherType) => {
  const [serch, setSerch] = useState<any>([]);
  useEffect(() => {
    const text = el[0]?.title?.toLowerCase().split(' ')[0];
    const find = data?.filter(
      (elem: any) => elem.title.toLowerCase().includes(text) && el[0]?.id !== elem.id
    );
    if (find.length) {
      setSerch(find);
    }
  }, [data, el]);
  if (serch.length > 0) {
    const slider1 = serch.map((el: any) => ({
      img: el.titleImg !== '' ? el.titleImg : '../img/not-photo.png',
      title: el.title,
    }));
    return (
      <Swiper
        direction={direction}
        className="other-slider"
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}>
        {slider1.map((el: any, index: any) => (
          <SwiperSlide key={index}>
            <div className="other-slider__wrapper">
              <div className="other-slider__img">
                <img src={el.img} alt="" />
              </div>
              <div className="other-slider__text">
                <NameSliceForSlider text={el.title} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
  return <></>;
};

export default SliderOther;
