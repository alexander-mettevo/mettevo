import React from 'react';
import Link from "next/link";
import {ServicesMenuList} from "@/components/pages/homePage/items/services/items/styles";

const ServiceMenuList = ({list}) => {

  return (
    <ServicesMenuList>
      {list.map((item) => (
        <li key={item.href}>
          <Link key={item.href} href={item.href}>{item.title}</Link>
        </li>
        ))}
    </ServicesMenuList>
  );
};

export default ServiceMenuList;