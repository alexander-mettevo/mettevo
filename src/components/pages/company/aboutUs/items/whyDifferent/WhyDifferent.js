import React from 'react';
import style from './why-different.module.scss';

const tempContent = [
  {
    number: '01',
    title: 'Our strategy is modern',
    text: 'We are not using 10-15 years old strategies. Only competitive approach.'
  },
  {
    number: '02',
    title: 'Strong, stable team',
    text: 'team always changes to decrease spends focused on sales and ROI - focused on positions'
  },
  {
    number: '03',
    title: 'We work with all keywords of your business',
    text: 'While other agencies sell you specific amount of keywords, we provide you complete coverage of all keywords.'
  },
  {
    number: '04',
    title: 'Completed team',
    text: 'We are not hiring freelancers for specific tasks. Same team will be working on each side of the work process.'
  }
]

const WhyDifferent = () => {
  return (
    <div className={`block-wrapper ${style['why-different']}`}>
      <div className={'block-title'}>
        Why are we different?
      </div>
      <div className={style['why-different__wrapper']}>
        {tempContent.map((item, index) => (
          <div key={index + 'whyDiff'}>
            <div className={style['why-different__item-title']}>
              <div className={style['why-different__item-number']}>{item.number}</div>
              <div className={'item-title'}>{item.title}</div>
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

export default WhyDifferent;