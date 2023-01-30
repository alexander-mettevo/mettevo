import React from 'react';
import BlockTitle from "@/components/reusable/text/blockTitle/BlockTitle";
import {StandOutHeader} from "@/components/pages/homePage/items/standOut/styles";
import StandOutContent from "@/components/pages/homePage/items/standOut/StandOutContent";
import {MainBlockWrapper} from "@/components/reusable/bloks/styles";

const StandOut = () => {

  return (
    <MainBlockWrapper>
      <StandOutHeader>
        <BlockTitle>
          what makes us stand out
        </BlockTitle>
      </StandOutHeader>
      <StandOutContent/>
    </MainBlockWrapper>
  );
};

export default StandOut;