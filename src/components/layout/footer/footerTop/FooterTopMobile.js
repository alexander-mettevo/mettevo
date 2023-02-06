import React from 'react';
import {useSelector} from "react-redux";
import FooterTopItems from "@/components/layout/footer/footerTop/items/FooterTopItems";

const FooterTopMobile = () => {
  const footerMenu = useSelector(state => state.menu.footerMenu);

  return (
    <div className={'footer-top__mobile'}>
      <div className={'footer-top'}>
        {footerMenu?.length > 0 && footerMenu.map((item, index) => {
         if (index % 2 === 0) return <FooterTopItems item={item} key={index + 'footerMenu'}/>
        })}
      </div>
      <div className={'footer-top'}>
        {footerMenu?.length > 0 && footerMenu.map((item, index) => {
          if (index % 2 !== 0) return <FooterTopItems item={item} key={index + 'footerMenu'}/>
        })}
      </div>
    </div>
  );

};

export default FooterTopMobile;