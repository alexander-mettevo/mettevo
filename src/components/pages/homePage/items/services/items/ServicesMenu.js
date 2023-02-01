import React from 'react';
import {
  ServicesMenuContainer,
  ServicesMenuImage,
  ServicesMenuItems
} from "@/components/pages/homePage/items/services/items/styles";
import ServiceMenuList from "@/components/pages/homePage/items/services/items/ServiceMenuList";
import dynamic from 'next/dynamic';
const ServiceImage = dynamic(() => import('@/components/pages/homePage/items/services/items/ServiceImage'), {
  ssr: false
});

const ServicesMenu = ({links, image}) => {
  return (
    <ServicesMenuContainer>
      <ServicesMenuItems>
        <ServiceMenuList list={links}/>
      </ServicesMenuItems>
      <ServiceImage image={image}/>
    </ServicesMenuContainer>
  );
};

export default ServicesMenu;