import React from 'react';
import Link from "next/link";

const NavigationItem = ({title, href, list}) => {
  return (
    <div className={'desktop-nav__wrapper'}>
      <Link className='nav-link desktop-nav__item underline-link' href={href}>{title}</Link>
      <ul className={'desktop-nav__list'}>

      </ul>
    </div>
  );
};

export default NavigationItem;