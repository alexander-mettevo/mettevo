import React from 'react';
import {
  ServicesMenuContainer,
  ServicesMenuImage,
  ServicesMenuItems
} from "@/components/pages/homePage/items/services/items/styles";
import ServiceMenuList from "@/components/pages/homePage/items/services/items/ServiceMenuList";
import renderContent from "@/components/pages/homePage/items/services/items/ServicesSVGImages/renderContent";


const ServicesMenu = ({links, image}) => {
  return (
    <ServicesMenuContainer>
      <ServicesMenuItems>
        <ServiceMenuList list={links}/>
      </ServicesMenuItems>
      <ServicesMenuImage>
        {renderContent(image)}
      </ServicesMenuImage>
    </ServicesMenuContainer>
  );
};

export default ServicesMenu;