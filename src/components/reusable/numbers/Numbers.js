import React from 'react';
import style from './numbers.module.scss'
import dynamic from "next/dynamic";

const NumbersItem = dynamic(() => import('@/components/reusable/numbers/NumbersItem'), {ssr: false});

const Numbers = ({numbers, rowClassName, itemClassName, valueClassName, textClassName}) => (
  <div className={rowClassName ? rowClassName : style['numbers__row']}>
    {numbers.length > 0 && numbers.map((item, index) => (
      <NumbersItem
        itemClassName={itemClassName}
        text={item.text}
        value={item.value}
        key={index + 'numbers'}
        valueClassName={valueClassName}
        textClassName={textClassName}
      />
    ))}
  </div>
);

export default Numbers;