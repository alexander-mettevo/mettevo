import React from 'react';
import {StandOutContentColumn, StandOutContentRow} from "@/components/pages/homePage/items/standOut/styles";
import SimpleText from "@/components/reusable/text/simpleText/SimpleText";

const StandOutContent = () => {
  return (
    <StandOutContentRow>
      <StandOutContentColumn>
        <SimpleText
          text={'Long-term relationships with our partners are our priority so that you will receive the first practical and exclusively useful insights on how you can improve your website just before signing up for a long-term contract.'}
          title={'Exclusively trust-based partnership'}/>
      </StandOutContentColumn>
      <StandOutContentColumn>

      </StandOutContentColumn>
    </StandOutContentRow>
  );
};

export default StandOutContent;