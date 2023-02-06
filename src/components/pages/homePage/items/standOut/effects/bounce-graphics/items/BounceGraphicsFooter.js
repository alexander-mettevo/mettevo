import React from 'react';
import Bounce from "@/components/reusable/bounce/Bounce";

const BounceGraphicsFooter = () => {
  return (
    <div className={'bounce-graphic__footer'}>
      <div>
        <Bounce color={'#101010'} size={'30px'} left={0} top={'calc(50% - 15px)'}/>
        - Mettevo
      </div>
      <div>
        <Bounce color={'#EBEBEB'} size={'30px'} left={0} top={'calc(50% - 15px)'}/>
        - usual IT-companies
      </div>
    </div>
  );
};

export default BounceGraphicsFooter;