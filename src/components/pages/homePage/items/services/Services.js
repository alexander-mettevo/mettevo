import React from 'react';
import BlockTitle from "@/components/reusable/text/blockTitle/BlockTitle";
import ServicesItem from "@/components/pages/homePage/items/services/items/ServicesItem";
import {useSelector} from "react-redux";
import style from './services.module.scss'
const Services = () => {
  const data = useSelector(state => state.homePage.homePageServiceList)

  return (
    <div className={style['services']}>
      <BlockTitle>
        what we do for you
      </BlockTitle>
      <div className={style['services__row']}>
        {data && data.map(item =>
          <ServicesItem
            key={item.href}
            href={item.href}
            title={item.title}
            links={item.links}
            image={item.image}
          />)}
      </div>
    </div>
  );
};

export default Services;