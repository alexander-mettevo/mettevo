import React from 'react';
import Numbers from "@/components/reusable/numbers/Numbers";
import style from './partners.module.scss'
import PartnersMapSVG from "@/components/pages/company/aboutUs/items/partners/items/PartnersMapSVG";

const Partners = ({partners}) => {
  return (
    <div className={`block-wrapper ${style['partners']}`}>
      <div className={"block-title"}>Partners & clients</div>
      <Numbers numbers={partners.numbers}
               rowClassName={style['numbers-partners']}
               itemClassName={style['numbers-partners__item']}
               valueClassName={style['numbers-partners__value']}
      />
      <PartnersMapSVG/>
    </div>
  );
};

export default Partners;