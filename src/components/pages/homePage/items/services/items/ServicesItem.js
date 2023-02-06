import React from 'react';
import ArrowLink from "@/components/reusable/links/ArrowLink";
import ServicesMenu from "@/components/pages/homePage/items/services/items/ServicesMenu";

const ServicesItem = ({title, href, links, image}) => {
  return (
    <div className={'item-services__wrapper'}>
      <h5 className='item-title item-services__title'>{title}</h5>
      <ServicesMenu links={links} image={image}/>
      <ArrowLink href={href} title={'learn more'}/>
    </div>
  );
};

export default ServicesItem;