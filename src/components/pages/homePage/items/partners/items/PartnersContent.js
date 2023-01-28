import React, {useState} from 'react';
import {useSelector} from "react-redux";
import dynamic  from "next/dynamic";
import {Swiper, SwiperSlide} from "swiper/react";
import {Controller} from "swiper";
import {PartnerLink, PartnersSliderWrapper} from "@/components/pages/homePage/items/partners/styles";
import Image from "next/image";

const PartnersSlider = dynamic(() => import('@/components/pages/homePage/items/partners/items/PartnersSlider'), {ssr: false});

const PartnersContent = () => {
  const [firstSliderController, setFirstSliderController] = useState(null)
  const [secondSliderController, setSecondSliderController] = useState(null)

  const firstHomePagePartners = useSelector(state => state.homePage.firstHomePagePartners)
  const secondHomePagePartners = useSelector(state => state.homePage.secondHomePagePartners)


if (!firstHomePagePartners || !secondHomePagePartners) return null
  return (
    <PartnersSliderWrapper data-mouse={'Drag'}>
      <Swiper
        slidesPerView={7}
        loop
        modules={[Controller]}
        onSwiper={setFirstSliderController}
        controller={{
          control: secondSliderController,
          inverse: true,
        }}>
        {firstHomePagePartners.map((item, index) => (
          <SwiperSlide key={index + item.image}>
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
        controller={{
          control: firstSliderController,
          inverse: true,
      }}>
        {secondHomePagePartners.map((item, index) => (
          <SwiperSlide key={index + item.image}>
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