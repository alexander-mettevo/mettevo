import React, {useEffect, useRef, useState} from 'react';
import {useSelector} from "react-redux";
import {Swiper, SwiperSlide} from "swiper/react";
import {Controller} from "swiper";
import Image from "next/image";
import partnersSliderAnimationScript from "@/components/pages/homePage/items/partners/animationScript";
import Link from "next/link";

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

const PartnersContent = () => {
  const [firstSliderController, setFirstSliderController] = useState(null)
  const [secondSliderController, setSecondSliderController] = useState(null)

  const firstHomePagePartners = useSelector(state => state.homePage.firstHomePagePartners)
  const secondHomePagePartners = useSelector(state => state.homePage.secondHomePagePartners)

  const firstSlider = useRef(null);
  const secondSlider = useRef(null);

  useEffect(() => {
    partnersSliderAnimationScript(firstSlider, secondSlider)
  }, [])

  return (
    <div className={'partners__slider-wrapper'} data-mouse={'Drag'}>
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
        {firstHomePagePartners.map((item, index) => (
          <SwiperSlide key={index + 'partnerLogo2'}>
            <Link className={'partners__link'} href={item.href}>
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
        {secondHomePagePartners.map((item, index) => (
          <SwiperSlide key={index + 'partnerLogo1'}>
            <Link className={'partners__link'} href={item.href}>
              <Image src={item.image} alt={'partner logo'} fill/>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PartnersContent;