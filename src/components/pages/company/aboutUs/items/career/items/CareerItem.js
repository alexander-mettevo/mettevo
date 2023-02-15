import React from 'react';
import style from '../career.module.scss'
import Link from "next/link";

const CareerItem = ({item}) => {
  return (
    <Link href={item.href} className={style['career__item']}>
      <div className={style['career__title']}>
        {item.title}
      </div>
      <div className={'text_1'}>
        <span className={style['career__timing']}>
          {item.timing}
          &nbsp;
        </span>
        <span>
          {item.location}

        </span>
        &nbsp;/&nbsp;
        <span>
          {item.type}
        </span>
      </div>
    </Link>
  );
};

export default CareerItem;