/* eslint-disable react/require-default-props */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import { Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

type SliderType = {
  spaceBetween?: number;
  imgs?: any;
};
const Slider = ({ spaceBetween = 41, imgs = [] }: SliderType) => {
  if (imgs.length) {
    const slider1 = imgs;
    const [activeThumb, setActiveThumb] = useState<any>(null);
    const [count, setCount] = useState(4);
    useEffect(() => {
      if (slider1.length >= 4) {
        setCount(4);
      } else {
        setCount(slider1.length);
      }
    }, [slider1]);
    return (
      <>
        <Swiper
          loop
          spaceBetween={20}
          modules={[Navigation, Thumbs]}
          grabCursor
          thumbs={{ swiper: activeThumb }}
          className="product-images-slider">
          {slider1.map((el: any, index: any) => (
            <SwiperSlide key={index}>
              {' '}
              <img src={el} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          loop
          onSwiper={setActiveThumb}
          spaceBetween={spaceBetween}
          modules={[Navigation, Thumbs]}
          slidesPerView={count}
          className="product-images-thumbs">
          {slider1.map((el: any, index: any) => (
            <SwiperSlide key={index}>
              <div className="product-wrapper">
                {' '}
                <img src={el} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
  }
  return (
    <div className="oneadvertisemen__not-phone">
      <img src="../img/not-photo.png" alt="" />
    </div>
  );
};

export default Slider;

// {
//   /* <SwiperSlide key={index}>
//             <img src="" alt="" />
//           </SwiperSlide>; */
// }
