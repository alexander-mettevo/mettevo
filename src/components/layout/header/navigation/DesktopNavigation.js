import React from 'react';
import {NavigationMenu, NavigationMenuLink} from "@/components/layout/header/styles";
import {useSelector} from "react-redux";
import Link from "next/link";


const Navigation = () => {
  const links = useSelector(state => state.headerMenu.pageLinks)

  return (
    <NavigationMenu>
      {
        links.length > 0 && links.map(({href, title}) => (
          <NavigationMenuLink href={href} key={href}>{title}</NavigationMenuLink>
        ))
      }
    </NavigationMenu>
  );
};

export default Navigation;