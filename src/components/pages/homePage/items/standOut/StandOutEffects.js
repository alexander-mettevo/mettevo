import React from 'react';
import BounceGraphics from "@/components/pages/homePage/items/standOut/effects/bounce-graphics/BounceGraphics";
import DoubleBounce from "@/components/pages/homePage/items/standOut/effects/doubleBounce/DoubleBounce";
import Experience from "@/components/pages/homePage/items/standOut/effects/experience/Experience";
import Benchmark from "@/components/pages/homePage/items/standOut/effects/benchmark/Benchmark";

const StandOutEffects = ({effect}) => {

  switch (effect) {
    case 'bounce-graphic':
      return <BounceGraphics/>;
      case 'double-bounce':
      return <DoubleBounce/>;
    case 'experience':
      return <Experience/>
    case 'benchmark':
      return <Benchmark/>
    default:
      return null;
  }
};

export default StandOutEffects;