import React from 'react';
import {useSelector} from "react-redux";
import FooterTopItems from "@/components/layout/footer/footerTop/items/FooterTopItems";

const FooterTop = () => {
  const footerMenu = useSelector(state => state.menu.footerMenu);
  return (
    <div className={'footer-top'}>
      {footerMenu?.length > 0 && footerMenu.map((item, index) => (
        <FooterTopItems item={item} key={index + 'footerMenu'}/>
      ))}
    </div>
  );
};

export default FooterTop;