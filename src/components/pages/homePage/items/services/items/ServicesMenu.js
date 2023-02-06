import React from 'react';
import ServiceMenuList from "@/components/pages/homePage/items/services/items/ServiceMenuList";
import dynamic from 'next/dynamic';

const ServiceImage = dynamic(() => import('@/components/pages/homePage/items/services/items/ServiceImage'), {
  ssr: false
});

const ServicesMenu = ({links, image}) => {
  return (
    <div className={'menu-services'}>
      <div className={'menu-services__items'}>
        <ServiceMenuList list={links}/>
      </div>
      <ServiceImage image={image}/>
    </div>
  );
};

export default ServicesMenu;