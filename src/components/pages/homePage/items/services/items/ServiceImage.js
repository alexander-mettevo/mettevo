import React from 'react';
import renderContent from "@/components/pages/homePage/items/services/items/ServicesSVGImages/renderContent";

const ServiceImage = ({image}) => {
  return (
    <div className={'menu-services__image'}>
      {renderContent(image)}
    </div>
  );
};

export default ServiceImage;