import React from 'react';
import {
  DoubleBounceItem,
  DoubleBounceWrapper
} from "@/components/pages/homePage/items/standOut/effects/doubleBounce/styles";
import Bounce from "@/components/reusable/bounce/Bounce";


const DoubleBounce = () => {
  return (
    <DoubleBounceWrapper>
      <DoubleBounceItem>
        <Bounce color={'#EBEBEB'} size={'250px'} top={0} left={0}/>
      </DoubleBounceItem>
      <DoubleBounceItem>
        <Bounce color={'#101010'} size={'316px'} top={0} left={0}/>
      </DoubleBounceItem>
    </DoubleBounceWrapper>
  );
};

export default DoubleBounce;