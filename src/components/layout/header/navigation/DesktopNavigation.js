import React from 'react';
import {useSelector} from "react-redux";
import {
  MobileNavigationWrapper,
  NavigationMenu,
  NavigationMenuLink
} from "@/components/layout/header/navigation/styles";


const DesktopNavigation = () => {
  const links = useSelector(state => state.menu.pageLinks)

  if (links.length > 0) {
    return (
      <NavigationMenu>
        {links.map(({href, title}, index) => (
          <NavigationMenuLink href={href} key={href + index}>{title}</NavigationMenuLink>
        ))
        }
      </NavigationMenu>
    );
  }
  return null;
};

export default DesktopNavigation;