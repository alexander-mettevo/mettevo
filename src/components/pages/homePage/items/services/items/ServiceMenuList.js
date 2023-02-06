import React from 'react';
import Link from "next/link";

const ServiceMenuList = ({list}) => {

  return (
    <ul className={'menu-services__list'}>
      {list.map((item) => (
        <li key={item.href}>
          <Link key={item.href} href={item.href}>{item.title}</Link>
        </li>
        ))}
    </ul>
  );
};

export default ServiceMenuList;