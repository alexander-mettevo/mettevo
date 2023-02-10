import React from 'react';
import ServiceMenuList from "@/components/pages/homePage/items/services/items/ServiceMenuList";
import dynamic from 'next/dynamic';
import style from '../services.module.scss'

const ServiceImage = dynamic(() => import('@/components/pages/homePage/items/services/items/ServiceImage'), {
  ssr: false
});

const ServicesMenu = ({links, image}) => {
  return (
    <div className={style['menu-services']}>
      <div className={style['menu-services__items']}>
        <ServiceMenuList list={links}/>
      </div>
      <ServiceImage image={image}/>
    </div>
  );
};

export default ServicesMenu;