import React from 'react';
import BounceGraphics from "@/components/pages/homePage/items/standOut/effects/bounce-graphics/BounceGraphics";
import DoubleBounce from "@/components/pages/homePage/items/standOut/effects/doubleBounce/DoubleBounce";

const StandOutEffects = ({effect}) => {

  switch (effect) {
    case 'bounce-graphic':
      return <BounceGraphics/>;
      case 'double-bounce':
      return <DoubleBounce/>;
    default:
      return null;
  }
};

export default StandOutEffects;