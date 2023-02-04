import React from 'react';
import BlockTitle from "@/components/reusable/text/blockTitle/BlockTitle";
import {StandOutHeader} from "@/components/pages/homePage/items/standOut/styles";
import StandOutContent from "@/components/pages/homePage/items/standOut/StandOutContent";

const StandOut = () => {

  return (
    <div className='block-wrapper'>
      <StandOutHeader>
        <BlockTitle>
          what makes us stand out
        </BlockTitle>
      </StandOutHeader>
      <StandOutContent/>
    </div>
  );
};

export default StandOut;