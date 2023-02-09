import React from 'react';
import BounceGraphicsFooter
  from "@/components/pages/homePage/items/standOut/effects/bounce-graphics/items/BounceGraphicsFooter";
import BounceGraphicsContent
  from "@/components/pages/homePage/items/standOut/effects/bounce-graphics/items/BounceGraphicsContent";
import style from './bounce-graphic.module.scss'
const BounceGraphics = () => {
  return (
    <div className={style['bounce-graphic']}>
      <BounceGraphicsContent/>
      <BounceGraphicsFooter/>
    </div>
  );
};

export default BounceGraphics;