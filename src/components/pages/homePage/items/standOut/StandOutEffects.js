import React from 'react';
import BounceGraphics from "@/components/pages/homePage/items/standOut/effects/bounce-graphics/BounceGraphics";

const StandOutEffects = ({effect}) => {

  switch (effect) {
    case 'bounce-graphic':
      return <BounceGraphics/>;
    default:
      return null;
  }
};

export default StandOutEffects;