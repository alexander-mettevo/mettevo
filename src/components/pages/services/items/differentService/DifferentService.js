import React from 'react';
import DiffCryptoSvg from "@/components/pages/services/items/differentService/items/DiffCryptoSvg";
import style from './different.module.scss'

const DifferentService = ({different}) => {
  return (
    <div className={'block-wrapper'}>
      <h2 className={`block-title block-title__center ${style['different__title']}`}>
      Hit your most ambitious revenue goals with SEO
      </h2>
      <div className={style['different__row']}>
        {different.map((item, index) => (
          <div key={index + 'diff'} className={`${style['different__item']} ${style['item-different']}`}>
            <div className={`${style['different__item']} ${style['item-different']}`}>
            <div className={style['item-different__top']}>
              <div className={style['item-different__image']}>
                <DiffCryptoSvg/>
              </div>
              <div className={'title_2'}>{item.title}</div>
            </div>
            <p className={'text_1'}>
              {item.text}
            </p>
          </div>
         </div>
          
          ))}
      </div>
    </div>
  );
};

export default DifferentService;