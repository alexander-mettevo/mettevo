import React from 'react';
import {
  ServicesMenuContainer,
  ServicesMenuImage,
  ServicesMenuItems
} from "@/components/pages/homePage/items/services/items/styles";

const ServicesMenu = () => {
  return (
    <ServicesMenuContainer>
      <ServicesMenuImage>
        <Image/>
      </ServicesMenuImage>
      <ServicesMenuItems></ServicesMenuItems>
    </ServicesMenuContainer>
  );
};

export default ServicesMenu;