import React from 'react';
import {BlockTitle} from "@/components/reusable/text/styles";
import {ServicesRow, ServicesWrapper} from "@/components/pages/homePage/items/services/styles";
import ServicesItem from "@/components/pages/homePage/items/services/items/ServicesItem";

const Services = () => {
  return (
    <ServicesWrapper>
      <BlockTitle>
        what we do for you
      </BlockTitle>
      <ServicesRow>
        <ServicesItem href={'/'} title={'seo services'}/>
        <ServicesItem href={'/'} title={'smm services'}/>
        <ServicesItem href={'/'} title={'web development'}/>
      </ServicesRow>
    </ServicesWrapper>
  );
};

export default Services;