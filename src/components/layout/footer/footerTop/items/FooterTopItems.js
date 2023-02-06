import React from 'react';
import FooterDropdown from "@/components/layout/footer/footerDropdown/FooterDropdown";
import Link from "next/link";

const FooterTopItems = ({item}) => {
  return (
    <div className={'footer-top__item'}>
      <div className={'footer-top__title'}>
        {item.title}
      </div>
      <ul className={'footer-top__list'}>
        {item.menuList.map((item, index) => {
          if (item.type === 'link') {
            return (
              <li key={index + 'footerTopItems'}>
                <Link className='footer__link underline-link' href={item.href}>
                  {item.title}
                </Link>
              </li>
            )
          }
          if (item.type === 'dropdown') {
            return (
              <li key={index + 'footerTopItems'}>
                <FooterDropdown list={item.links} title={item.title}/>
              </li>
            )
          }
        return null
        })}
      </ul>
    </div>
  );
}
  ;

  export default FooterTopItems;