import React from 'react';
import Bounce from "@/components/reusable/bounce/Bounce";
import style from './double-bounce.module.scss';
import mainStyle from '../../stand-out.module.scss';
const DoubleBounce = () => {
  return (
    <div className={`${mainStyle['stand-out__effect']} ${style['double-bounce']}`}>
      <div className={style['double-bounce__item']}>
        <Bounce color={'#EBEBEB'} mobileSize={'180px'} size={'260px'} top={0} left={0}>
          <div className={style['double-bounce__word-wrap']}>copywriting</div>
          <div className={style['double-bounce__word-wrap']}>web design + development</div>
          <div className={style['double-bounce__word-wrap']}>instagram management</div>
          <div className={style['double-bounce__word-wrap']}>e-commerce seo</div>
        </Bounce>
        <span>services of competitors</span>
      </div>
      <div className={style['double-bounce__item']}>
        <Bounce color={'#101010'} mobileSize={'240px'} size={'320px'} top={0} left={0}>
          <div className={style['double-bounce__word-wrap']}>competitor analysis</div>
          <div className={style['double-bounce__word-wrap']}>web design + development</div>
          <div className={style['double-bounce__word-wrap']}>proofreading + copywriting</div>
          <div className={style['double-bounce__word-wrap']}>website support & maintenance</div>
          <div className={style['double-bounce__word-wrap']}>instagram management</div>
          <div className={style['double-bounce__word-wrap']}>wide range of seo services</div>
        </Bounce>
        <span>our services</span>
      </div>
    </div>
  );
};

export default DoubleBounce;