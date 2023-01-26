import React from 'react';
import {GraphicFooterRow} from "@/components/pages/homePage/items/standOut/effects/bounce-graphics/styles";
import Bounce from "@/components/reusable/bounce/Bounce";
const BounceGraphicsFooter = () => {
  return (
    <GraphicFooterRow>
      <div>
        <Bounce color={'#101010'} size={'30px'} left={0} top={'calc(50% - 15px)'}/>
        - Mettevo
      </div>
      <div>
        <Bounce color={'#EBEBEB'} size={'30px'} left={0} top={'calc(50% - 15px)'}/>
        - usual IT-companies
      </div>
    </GraphicFooterRow>
  );
};

export default BounceGraphicsFooter;