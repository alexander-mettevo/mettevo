import React from 'react';
import Image from "next/image";
import dayjs from "dayjs";
import Link from "next/link";

const HomePageBlogItem = ({item}) => {

  return (
    <Link className={'home-blog__item'} href={item.href}>
      <div className={'home-blog__image'} data-mouse={'Read'}>
        <Image src={item.image} fill alt={'post image'}/>
      </div>
      <div>
        <div className={'home-blog__theme'}>{item.theme}</div>
        <div className={'home-blog__title'}>{item.title}</div>
        <div className={'home-blog__date'}>{dayjs(item.date).format('MMM D, YYYY')}</div>
      </div>
    </Link >
  );
};

export default HomePageBlogItem;