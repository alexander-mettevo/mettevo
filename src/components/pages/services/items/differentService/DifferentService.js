import React from 'react';
import DiffCryptoSvg from "@/components/pages/services/items/differentService/items/DiffCryptoSvg";

const DifferentService = ({different}) => {
  return (
    <div className={'block-wrapper'}>
      <h2 className='block-title different__title'>
        WHAT MAKES mettevo SEO SERVICES DIFFERENT
      </h2>
      <div className={'different__row'}>
        {different.map((item, index) => (
          <div key={index + 'diff'} className={'different__item item-different'}>
            <div className={'item-different__top'}>
              <div className={'item-different__image'}>
                <DiffCryptoSvg/>
              </div>
              <div className={'title_1'}>{item.title}</div>
            </div>
            <p className={'text_1'}>
              {item.text}
            </p>
          </div>
          ))}
      </div>
    </div>
  );
};

export default DifferentService;