import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import style from '../blogTrending/trending.module.scss'
import Link from "next/link";
import dayjs from "dayjs";
import componentStyle from './article-list.module.scss'

const breakpoints = {
  992: {
    slidesPerView: 3,
  },
  320: {
    slidesPerView: 2,
  },
}

const LatestArticlesMob = ({articles}) => {
  return (
    <div className={componentStyle['article-list']}>
      <h2 className={`${componentStyle['article-list__title']} item-title`}>latest articles</h2>
      <Swiper
        spaceBetween={5}
        grabCursor={true}
        className="mySwiper"
        breakpoints={breakpoints}
      >
        {articles.map((article, index) => (
          <SwiperSlide key={index + 'LatestArticlesMob'}>
            <Link href={article.href} target={'_blank'}>
              <div className={`${style['trending__item-top']} text_1`}>
                {dayjs(article.date).format('MMM D, YYYY')}
              </div>
              <div className={'item-text'}>
                {article.title}
              </div>
            </Link>
          </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default LatestArticlesMob;