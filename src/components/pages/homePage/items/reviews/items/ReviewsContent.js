import React from 'react';
import {ReviewsContentWrapper} from "@/components/pages/homePage/items/reviews/styles";
import {Swiper, SwiperSlide} from "swiper/react";
import {useSelector} from "react-redux";
import ReviewsItem from "@/components/pages/homePage/items/reviews/items/ReviewsItem";
import { Navigation} from "swiper";

const ReviewsContent = () => {
  const data = useSelector(state => state.homePage.reviewsHomePage);

  return (
    <ReviewsContentWrapper>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        onSlideChange={() => console.log('slide change')}
        modules={[Navigation]}
        grabCursor={true}
        onSwiper={(swiper) => console.log(swiper)}
        className="mySwiper"
      >
        {data?.length > 0 && data.map((item, index) => (
          <SwiperSlide key={index + 'homepageReview'}>
            <ReviewsItem item={item}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </ReviewsContentWrapper>
  );
};

export default ReviewsContent;