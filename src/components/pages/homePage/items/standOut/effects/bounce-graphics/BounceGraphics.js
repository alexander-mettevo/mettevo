import React from 'react';
import BounceGraphicsFooter
  from "@/components/pages/homePage/items/standOut/effects/bounce-graphics/items/BounceGraphicsFooter";
import BounceGraphicsContent
  from "@/components/pages/homePage/items/standOut/effects/bounce-graphics/items/BounceGraphicsContent";

const BounceGraphics = () => {
  return (
    <div className={'bounce-graphic'}>
      <BounceGraphicsContent/>
      <BounceGraphicsFooter/>
    </div>
  );
};

export default BounceGraphics;