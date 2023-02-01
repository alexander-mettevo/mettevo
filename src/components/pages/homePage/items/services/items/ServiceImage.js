import React from 'react';
import {ServicesMenuImage} from "@/components/pages/homePage/items/services/items/styles";
import renderContent from "@/components/pages/homePage/items/services/items/ServicesSVGImages/renderContent";

const ServiceImage = ({image}) => {
  return (
    <ServicesMenuImage>
      {renderContent(image)}
    </ServicesMenuImage>
  );
};

export default ServiceImage;