import React from 'react';
import {useSelector} from "react-redux";
import {FooterTopItemTitle, FooterTopWrapper} from "@/components/layout/footer/footerTop/styles";
import FooterTopItems from "@/components/layout/footer/footerTop/items/FooterTopItems";

const FooterTop = () => {
  const footerMenu = useSelector(state => state.menu.footerMenu);
  return (
    <FooterTopWrapper>
      {footerMenu?.length > 0 && footerMenu.map((item, index) => (
        <FooterTopItems item={item} key={index + 'footerMenu'}/>
      ))}
    </FooterTopWrapper>
  );
};

export default FooterTop;