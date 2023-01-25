import React from 'react';
import {
  ServicesMenuContainer,
  ServicesMenuImage,
  ServicesMenuItems
} from "@/components/pages/homePage/items/services/items/styles";
import ServiceMenuList from "@/components/pages/homePage/items/services/items/ServiceMenuList";
import Image from "next/image";

const ServicesMenu = ({links, image}) => {
  return (
    <ServicesMenuContainer>
      <ServicesMenuItems>
        <ServiceMenuList list={links}/>
      </ServicesMenuItems>
      <ServicesMenuImage>
        <Image src={image}
               width={700}
               height={475}
               sizes="100vw"
               alt={'service'}/>
      </ServicesMenuImage>
    </ServicesMenuContainer>
  );
};

export default ServicesMenu;