import React from 'react';
import style from './black-and-gray.module.scss'


const BlackAndGray = ({item}) => {
  return (
    <p className={'item-text'}>
      <span>{item.title} </span>
      -
      <span className={style['black-and-gray__subtitle']}> {item.subtitle}</span>
    </p>
  );
};

export default BlackAndGray;