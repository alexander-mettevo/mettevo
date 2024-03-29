import React, {useEffect, useRef, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Controller} from "swiper";
import Image from "next/image";
import partnersSliderAnimationScript from "@/components/pages/homePage/items/partners/animationScript";
import Link from "next/link";
import style from '../partners.module.scss'

const breakpoints = {
  1440: {
    slidesPerView: 7
  },
  1100: {
    slidesPerView: 5
  },
  768: {
    slidesPerView: 4
  },
  420: {
    slidesPerView: 3
  },
  320: {
    slidesPerView: 2
  }
}

const PartnersContent = ({partners}) => {
  const [firstSliderController, setFirstSliderController] = useState(null)
  const [secondSliderController, setSecondSliderController] = useState(null)

  const firstSlider = useRef(null);
  const secondSlider = useRef(null);

  useEffect(() => {
    partnersSliderAnimationScript(firstSlider, secondSlider)
  }, [])

  return (
    <div className={style['partners__slider-wrapper']} data-mouse={'Drag'}>
      <Swiper
        ref={firstSlider}
        slidesPerView={7}
        loop
        breakpoints={breakpoints}
        modules={[Controller]}
        onSwiper={setFirstSliderController}
        controller={{
          control: secondSliderController,
          inverse: true,
        }}>
        {partners.top.map((item, index) => (
          <SwiperSlide key={index + 'partnerLogo2'}>
            <Link className={style['partners__link']} href={item.href}>
              <Image src={item.image} alt={'partner logo'} fill/>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        ref={secondSlider}
        slidesPerView={7}
        loop
        modules={[Controller]}
        onSwiper={setSecondSliderController}
        breakpoints={breakpoints}
        controller={{
          control: firstSliderController,
          inverse: true,
      }}>
        {partners.bottom.map((item, index) => (
          <SwiperSlide key={index + 'partnerLogo1'}>
            <Link className={style['partners__link']} href={item.href}>
              <Image src={item.image} alt={'partner logo'} fill/>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PartnersContent;