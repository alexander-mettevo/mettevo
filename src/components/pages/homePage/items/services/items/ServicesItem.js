import React from 'react';
import ArrowLink from "@/components/reusable/links/ArrowLink";
import ServicesMenu from "@/components/pages/homePage/items/services/items/ServicesMenu";
import style from '../services.module.scss'

const ServicesItem = ({title, href, links, image}) => {
  return (
    <div className={style['item-services__wrapper']}>
      <h5 className={`${style['item-services__title']} item-title`}>{title}</h5>
      <ServicesMenu links={links} image={image}/>
      <ArrowLink href={href} title={'learn more'}/>
    </div>
  );
};

export default ServicesItem;