import React from 'react';
import {ServicesItemContainer, ServicesItemTitle} from "@/components/pages/homePage/items/services/styles";
import ArrowLink from "@/components/reusable/links/ArrowLink";
import ServicesMenu from "@/components/pages/homePage/items/services/items/ServicesMenu";

const ServicesItem = ({title, href, links, image}) => {
  return (
    <ServicesItemContainer>
      <ServicesItemTitle className='item-title'>{title}</ServicesItemTitle>
      <ServicesMenu links={links} image={image}/>
      <ArrowLink href={href} title={'learn more'}/>
    </ServicesItemContainer>
  );
};

export default ServicesItem;