import React from 'react';
import {BlockTitle, ItemText} from "@/components/reusable/text/styles";
import {AreYouReadyTitle, AreYouReadyWrapper} from "@/components/reusable/areYouRedy/styles";

const AreYouReady = () => {
  return (
    <AreYouReadyWrapper>
      <AreYouReadyTitle>
        Are You Ready To Grow Your Website?
      </AreYouReadyTitle>
      <ItemText>
        Understanding the ins and outs of website growth, we help ensure that your site grows over time with
        ever-increasing reach and accessibility. Not only do we employ the latest digital marketing techniques for
        driving traffic directly to your website, but our strategies also focus on gaining loyalty from those visitors
        so they come back again and again.
      </ItemText>
      <ItemText>
        Leave your contacts to get a comprehensive and aggressive digital marketing plan taking your business to new
        heights.
      </ItemText>
    </AreYouReadyWrapper>
  );
};

export default AreYouReady;