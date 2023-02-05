import React from 'react';
import {useSelector} from "react-redux";
import Link from "next/link";

const MobileNavigation = () => {
  const links = useSelector(state => state.menu.pageLinks)

  if (links.length > 0) {
    return (
      <nav className={'mobile-nav'}>
        {links.map(({href, title}, index) => (
          <Link className='nav-link underline-link' href={href} key={href + index}>{title}</Link>
        ))
        }
      </nav>
    );
  }
  return null;
};

export default MobileNavigation;