import React, {useState} from 'react';
import {useSelector} from "react-redux";
import dynamic  from "next/dynamic";
import {Swiper, SwiperSlide} from "swiper/react";
import {Controller} from "swiper";
import {PartnerLink, PartnersSliderWrapper} from "@/components/pages/homePage/items/partners/styles";
import Image from "next/image";

const PartnersSlider = dynamic(() => import('@/components/pages/homePage/items/partners/items/PartnersSlider'), {ssr: false});

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


if (typeof window === 'undefined') return null

  return (
    <PartnersSliderWrapper data-mouse={'Drag'}>
      <Swiper
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
            <PartnerLink href={item.href}>
              <Image src={item.image} alt={'partner logo'} fill/>
            </PartnerLink>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
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
            <PartnerLink href={item.href}>
              <Image src={item.image} alt={'partner logo'} fill/>
            </PartnerLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </PartnersSliderWrapper>
  );
};

export default PartnersContent;