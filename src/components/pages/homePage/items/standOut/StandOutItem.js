import React from 'react';
import SimpleText from "@/components/reusable/text/simpleText/SimpleText";
import dynamic from "next/dynamic";
import {StandOutContentItemWrapper} from "@/components/pages/homePage/items/standOut/styles";

const StandOutEffects = dynamic(() => import('@/components/pages/homePage/items/standOut/StandOutEffects'), {
  ssr: false
});
const StandOutItem = ({item}) => {
  return (
    <StandOutContentItemWrapper>
      <SimpleText
        text={item.text}
        title={item.title}/>
      {item.effect && <StandOutEffects effect={item.effect}/>}
    </StandOutContentItemWrapper>
  );
};

export default StandOutItem;