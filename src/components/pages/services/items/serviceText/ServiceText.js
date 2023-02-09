import React from 'react';
import Bounce from "@/components/reusable/bounce/Bounce";
import style from './service-text.module.scss'

const ServiceText = () => {
  return (
    <div>
      <div className={style['service-text__row']}>
        <div>
          <div className={`block-title ${style['service-text__title']}`}>
            We Deliver Page 1 Rankings
          </div>
          <p className={'item-text '}>
            On-page optimization involves updating your website methodically to increase its online visibility for those
            searching for the products or services you offer. SEO marketing requires significant time and skills to
            produce a competitive strategy for the digital marketplace. DMA conducts a site audit to understand the
            keywords your website targets, the quality of content on the website, and internal linking strategies to
            identify improvements to your SEO performance.
          </p>
        </div>
        <div className={style['service-text__bounce']}>
          <Bounce color={'#101010'} size={'140px'} mobileSize={'80px'} left={'40%'} top={'50%'}>
            Free quote
          </Bounce>
        </div>
      </div>
      <div className={`${style['service-text__row']} ${style['service-text__row_mid']}`}>
        <div className={style['service-text__bounce']}>
          <Bounce color={'#101010'} size={'140px'} mobileSize={'80px'} left={'60%'} top={'50%'}>
            Free quote
          </Bounce>
        </div>
        <div>
          <div className={'block-title'}>
            RANK HIGHER ON GOOGLE
          </div>
          <p className={'item-text '}>
            Your incoming links and outside presence affects your SEO performance. We have a proven track record of
            creating campaigns that take advantage of powerful resources to establish our clients' websites as
            authorities in their industry. This ensures that each SEO campaign is a success by producing Page 1 results,
            driving relevant traffic to crucial pages.
          </p>
        </div>
      </div>
      <div className={style['service-text__row']}>
        <div>
          <div className={'block-title'}>
            We Listen Before We Act
          </div>
          <p className={'item-text '}>
            Before we start work on any client's website, we conduct an audit of the website by taking a look at the
            content and its presence on the World Wide Web. Our SEO professionals spend time getting to understand the
            work that has already been done and determine what areas are lacking. We put together a plan to ensure that
            each website is given a chance to succeed. We believe search engine optimization is not a "one size fits
            all" situation; each of our SEO campaigns are built specifically with that client in mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceText;