import React, {useEffect} from 'react';
import Bounce from "@/components/reusable/bounce/Bounce";
import {GraphicWrapper} from "@/components/pages/homePage/items/standOut/effects/bounce-graphics/styles";
import BounceGraphicsFooter
  from "@/components/pages/homePage/items/standOut/effects/bounce-graphics/items/BounceGraphicsFooter";
import BounceGraphicsContent
  from "@/components/pages/homePage/items/standOut/effects/bounce-graphics/items/BounceGraphicsContent";

const BounceGraphics = () => {
  return (
    <GraphicWrapper>
      <BounceGraphicsContent/>
      <BounceGraphicsFooter/>
    </GraphicWrapper>
  );
};

export default BounceGraphics;