import React from 'react';
import {useSelector} from "react-redux";
import Link from "next/link";

const DesktopNavigation = () => {
  const links = useSelector(state => state.menu.pageLinks)

  if (links.length > 0) {
    return (
      <nav className='desktop-nav'>

        {/*{links.map((item, index) => {*/}
        {/*  if(item.childPage.length > 0) return  <NavigationMenuItem item={item} key={index + 'nav'}/>*/}
        {/*   else return  <Link className='nav-link  underline-link' key={index + 'sub-menu'} href={item.href}>{item.title}</Link>*/}
        {/*})}*/}
      </nav>
    );
  }
  return null;
};

export default DesktopNavigation;