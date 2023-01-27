import React from 'react';
import {BlockTitle} from "@/components/reusable/text/styles";
import {StandOutHeader, StandOutWrapper} from "@/components/pages/homePage/items/standOut/styles";
import StandOutContent from "@/components/pages/homePage/items/standOut/StandOutContent";

const StandOut = () => {

  return (
    <StandOutWrapper>
      <StandOutHeader>
        <BlockTitle>
          what makes us stand out
        </BlockTitle>
      </StandOutHeader>
      <StandOutContent/>
    </StandOutWrapper>
  );
};

export default StandOut;