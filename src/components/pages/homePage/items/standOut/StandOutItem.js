import React from 'react';
import SimpleText from "@/components/reusable/text/simpleText/SimpleText";
import dynamic from "next/dynamic";
import style from './stand-out.module.scss';

const StandOutEffects = dynamic(() => import('@/components/pages/homePage/items/standOut/StandOutEffects'), {
  ssr: false
});
const StandOutItem = ({item}) => {
  return (
    <div className={style['stand-out__item']}>
      <SimpleText
        text={item.text}
        title={item.title}/>
      {item.effect && <StandOutEffects effect={item.effect}/>}
    </div>
  );
};

export default StandOutItem;