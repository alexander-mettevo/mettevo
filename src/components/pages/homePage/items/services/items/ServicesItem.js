import React from 'react';
import {ServicesItemContainer, ServicesItemTitle} from "@/components/pages/homePage/items/services/styles";
import ArrowLink from "@/components/reusable/links/ArrowLink";

const ServicesItem = ({title, href}) => {
  return (
    <ServicesItemContainer>
      <ServicesItemTitle>{title}</ServicesItemTitle>
      <ArrowLink href={href} title={'learn more'}/>
    </ServicesItemContainer>
  );
};

export default ServicesItem;