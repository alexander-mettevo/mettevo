import React from 'react';
import SimpleText from "@/components/reusable/text/simpleText/SimpleText";
import dynamic from "next/dynamic";

const StandOutEffects = dynamic(() => import('@/components/pages/homePage/items/standOut/StandOutEffects'), {
  ssr: false
});
const StandOutItem = ({item}) => {
  return (
    <div className={'stand-out__item'}>
      <SimpleText
        text={item.text}
        title={item.title}/>
      {item.effect && <StandOutEffects effect={item.effect}/>}
    </div>
  );
};

export default StandOutItem;