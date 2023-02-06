import React from 'react';
import BlockTitle from "@/components/reusable/text/blockTitle/BlockTitle";
import ServicesItem from "@/components/pages/homePage/items/services/items/ServicesItem";
import {useSelector} from "react-redux";

const Services = () => {
  const data = useSelector(state => state.homePage.homePageServiceList)

  return (
    <div className={'services'}>
      <BlockTitle>
        what we do for you
      </BlockTitle>
      <div className={'services__row'}>
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