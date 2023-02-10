import React from 'react';
import BounceGraphicsCircleContainer
  from "@/components/pages/homePage/items/standOut/effects/bounce-graphics/items/BounceGraphicsCircleContainer";
import style from '../bounce-graphic.module.scss'

const BounceGraphicsContent = () => {
  return (
    <div className={style['bounce-graphic__content']}>
      <BounceGraphicsCircleContainer/>
      <div className={style['bounce-graphic__footer_left']}>result of digital transformation</div>
      <div className={style['bounce-graphic__footer_bottom']}>
        <span>start</span>
        <span>1 year</span>
        <span>2 year</span>
      </div>
    </div>
  );
};

export default BounceGraphicsContent;