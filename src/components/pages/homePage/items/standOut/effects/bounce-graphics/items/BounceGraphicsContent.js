import React from 'react';
import {
  BounceGraphicsContentWrapper, BounceGraphicsFooterBottomText,
  BounceGraphicsFooterLeftSideText
} from "@/components/pages/homePage/items/standOut/effects/bounce-graphics/styles";
import BounceGraphicsCircleContainer
  from "@/components/pages/homePage/items/standOut/effects/bounce-graphics/items/BounceGraphicsCircleContainer";

const BounceGraphicsContent = () => {
  return (
    <BounceGraphicsContentWrapper>
      <BounceGraphicsCircleContainer/>
      <BounceGraphicsFooterLeftSideText>result of digital transformation</BounceGraphicsFooterLeftSideText>
      <BounceGraphicsFooterBottomText>
        <span>start</span>
        <span>1 year</span>
        <span>2 year</span>
      </BounceGraphicsFooterBottomText>
    </BounceGraphicsContentWrapper>
  );
};

export default BounceGraphicsContent;