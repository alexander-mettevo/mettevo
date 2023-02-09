import React from 'react';
import Image from "next/image";
import dayjs from "dayjs";
import Link from "next/link";
import style from '../home-blog.module.scss'
const HomePageBlogItem = ({item}) => {

  return (
    <Link className={style['home-blog__item']} href={item.href}>
      <div className={style['home-blog__image']} data-mouse={'Read'}>
        <Image src={item.image} fill alt={'post image'}/>
      </div>
      <div>
        <div className={style['home-blog__theme']}>{item.theme}</div>
        <div className={style['home-blog__title']}>{item.title}</div>
        <div className={style['home-blog__date']}>{dayjs(item.date).format('MMM D, YYYY')}</div>
      </div>
    </Link >
  );
};

export default HomePageBlogItem;