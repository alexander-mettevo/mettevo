import React from 'react';
import {
  ArrowLinkItem,
  ArrowLinkItemsWrapper,
  ArrowLinkLine,
  ArrowLinkRectangle,
  ArrowLinkWrapper
} from "@/components/reusable/links/styles";

const ArrowLink = ({href, title}) => {
  return (
    <ArrowLinkWrapper>
      <ArrowLinkItem href={href}>
        {title}
      </ArrowLinkItem>
      <ArrowLinkItemsWrapper>
        <ArrowLinkLine/>
        <ArrowLinkRectangle/>
      </ArrowLinkItemsWrapper>


    </ArrowLinkWrapper>
  );
};

export default ArrowLink;