import React from 'react';
import {Grid, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import SeoItem from "@/components/pages/company/aboutUs/items/seo/items/SEOItem";

const breakpoints = {
  1440: {
    slidesPerView: 6,
    rows: 2
  },
  1100: {
    slidesPerView: 5,
    rows: 2
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 16,
    rows: 2
  },
  420: {
    slidesPerView: 3,
    rows: 2
  },
  320: {
    slidesPerView: 2,
    rows: 2
  }
}

const SeoGrid = ({list}) => {

  return (
    <Swiper
      grid={{
        rows: 2,
        fill: "row",
      }}
      spaceBetween={32}
      modules={[Grid, Navigation]}
      navigation={true}
      className="__container"
      breakpoints={breakpoints}
    >
      {list?.length > 0 && list.map((item, index) => (
        <SwiperSlide key={index + 'seo'}>
          <SeoItem item={item}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SeoGrid;