import React from 'react';
import {FooterTopItemList, FooterTopItemTitle, FooterTopItemWrap} from "@/components/layout/footer/footerTop/styles";
import {FooterLink} from "@/components/layout/footer/styles";
import FooterDropdown from "@/components/layout/footer/footerDropdown/FooterDropdown";

const FooterTopItems = ({item}) => {
  return (
    <FooterTopItemWrap>
      <FooterTopItemTitle>
        {item.title}
      </FooterTopItemTitle>
      <FooterTopItemList>
        {item.menuList.map((item, index) => {
          if (item.type === 'link') {
            return (
              <li key={index + 'footerTopItems'}>
                <FooterLink href={item.href}>
                  {item.title}
                </FooterLink>
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
      </FooterTopItemList>
    </FooterTopItemWrap>
  );
}
  ;

  export default FooterTopItems;