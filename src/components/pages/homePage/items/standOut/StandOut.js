import React from 'react';
import BlockTitle from "@/components/reusable/text/blockTitle/BlockTitle";
import StandOutContent from "@/components/pages/homePage/items/standOut/StandOutContent";

const StandOut = () => {

  return (
    <div className='block-wrapper'>
      <div className='stand-out__header'>
        <BlockTitle>
          what makes us stand out
        </BlockTitle>
      </div>
      <StandOutContent/>
    </div>
  );
};

export default StandOut;