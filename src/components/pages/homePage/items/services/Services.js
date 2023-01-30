import React from 'react';
import BlockTitle from "@/components/reusable/text/blockTitle/BlockTitle";
import {ServicesRow, ServicesWrapper} from "@/components/pages/homePage/items/services/styles";
import ServicesItem from "@/components/pages/homePage/items/services/items/ServicesItem";
import {useSelector} from "react-redux";

const Services = () => {
  const data = useSelector(state => state.homePage.homePageServiceList)

  return (
    <ServicesWrapper>
      <BlockTitle>
        what we do for you
      </BlockTitle>
      <ServicesRow>
        {data && data.map(item =>
          <ServicesItem
            key={item.href}
            href={item.href}
            title={item.title}
            links={item.links}
            image={item.image}
          />)}
      </ServicesRow>
    </ServicesWrapper>
  );
};

export default Services;