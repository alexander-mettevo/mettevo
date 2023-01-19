import React from 'react';
import {useSelector} from "react-redux";
import {FooterTopMobileWrapper, FooterTopWrapper} from "@/components/layout/footer/footerTop/styles";
import FooterTopItems from "@/components/layout/footer/footerTop/items/FooterTopItems";

const FooterTopMobile = () => {
  const footerMenu = useSelector(state => state.menu.footerMenu);

  return (
    <FooterTopMobileWrapper>
      <FooterTopWrapper>
        {footerMenu?.length > 0 && footerMenu.map((item, index) => {
         if (index % 2 === 0) return <FooterTopItems item={item} key={index + 'footerMenu'}/>
        })}
      </FooterTopWrapper>
      <FooterTopWrapper>
        {footerMenu?.length > 0 && footerMenu.map((item, index) => {
          if (index % 2 !== 0) return <FooterTopItems item={item} key={index + 'footerMenu'}/>
        })}
      </FooterTopWrapper>
    </FooterTopMobileWrapper>
  );

};

export default FooterTopMobile;