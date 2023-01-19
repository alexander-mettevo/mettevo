import React from 'react';
import {useSelector} from "react-redux";
import {MobileNavigationWrapper, NavigationMenuLink} from "@/components/layout/header/navigation/styles";

const MobileNavigation = () => {
  const links = useSelector(state => state.menu.pageLinks)

  if (links.length > 0) {
    return (
      <MobileNavigationWrapper>
        {links.map(({href, title}, index) => (
          <NavigationMenuLink href={href} key={href + index}>{title}</NavigationMenuLink>
        ))
        }
      </MobileNavigationWrapper>
    );
  }
  return null;
};

export default MobileNavigation;