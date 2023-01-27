import React from 'react';
import {
  DoubleBounceItem, DoubleBounceWordWrap,
  DoubleBounceWrapper
} from "@/components/pages/homePage/items/standOut/effects/doubleBounce/styles";
import Bounce from "@/components/reusable/bounce/Bounce";


const DoubleBounce = () => {
  return (
    <DoubleBounceWrapper>
      <DoubleBounceItem>
        <Bounce color={'#EBEBEB'} mobileSize={'180px'} size={'260px'} top={0} left={0}>
          <DoubleBounceWordWrap>copywriting</DoubleBounceWordWrap>
          <DoubleBounceWordWrap>web design + development</DoubleBounceWordWrap>
          <DoubleBounceWordWrap>instagram management</DoubleBounceWordWrap>
          <DoubleBounceWordWrap>e-commerce seo</DoubleBounceWordWrap>
        </Bounce>
        <span>services of competitors</span>
      </DoubleBounceItem>
      <DoubleBounceItem>
        <Bounce color={'#101010'} mobileSize={'240px'} size={'320px'} top={0} left={0}>
          <DoubleBounceWordWrap>competitor analysis</DoubleBounceWordWrap>
          <DoubleBounceWordWrap>web design + development</DoubleBounceWordWrap>
          <DoubleBounceWordWrap>proofreading + copywriting</DoubleBounceWordWrap>
          <DoubleBounceWordWrap>website support & maintenance</DoubleBounceWordWrap>
          <DoubleBounceWordWrap>instagram management</DoubleBounceWordWrap>
          <DoubleBounceWordWrap>wide range of seo services</DoubleBounceWordWrap>
        </Bounce>
        <span>our services</span>
      </DoubleBounceItem>
    </DoubleBounceWrapper>
  );
};

export default DoubleBounce;