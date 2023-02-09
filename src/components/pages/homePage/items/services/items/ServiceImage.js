import React from 'react';
import renderContent from "@/components/pages/homePage/items/services/items/ServicesSVGImages/renderContent";
import style from '../services.module.scss'

const ServiceImage = ({image}) => {
  return (
    <div className={style['menu-services__image']}>
      {renderContent(image)}
    </div>
  );
};

export default ServiceImage;