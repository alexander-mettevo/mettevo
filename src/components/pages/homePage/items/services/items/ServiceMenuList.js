import React from 'react';
import Link from "next/link";
import style from '../services.module.scss'

const ServiceMenuList = ({list}) => {

  return (
    <ul className={style['menu-services__list']}>
      {list.map((item) => (
        <li key={item.href}>
          <Link key={item.href} href={item.href}>{item.title}</Link>
        </li>
        ))}
    </ul>
  );
};

export default ServiceMenuList;