import React, {useRef, useState} from 'react';
import {ControlledMenu, MenuItem, SubMenu, useMenuState} from "@szhsin/react-menu";
import Link from "next/link";

const NavigationMenuItem = ({item, isChild}) => {
  const ref = useRef(null);
  const [menuProps, toggleMenu] = useMenuState({ transition: true });

  return (
    <div >
      <Link ref={ref}  onPointerEnter={() => toggleMenu(true)}
        className='nav-link  underline-link' href={item.href}>{item.title}</Link>
      <ControlledMenu
        {...menuProps} anchorRef={ref}
        onPointerLeave={() => toggleMenu(false)}
        onClose={() => toggleMenu(false)}>

        {item.childPage && item.childPage.map((page, index) => (
         <div key={index + 'dropdown'}>
           {page.childPage?.length > 0 ? (
             <SubMenu label={page.title}>
               {
                  page.childPage.map((childPage, index) => (
                    <Link className='nav-link  underline-link' key={index + 'sub-menu'} href={childPage.href}>{childPage.title}</Link>
                  ))
               }
             </SubMenu>
             ) :
             <MenuItem key={index + 'key-nav'}>
               <Link className='nav-link  underline-link' href={page.href}>{page.title}</Link>
             </MenuItem>
           }
         </div>
        ))}
      </ControlledMenu>
    </div>
  );
};

export default NavigationMenuItem;