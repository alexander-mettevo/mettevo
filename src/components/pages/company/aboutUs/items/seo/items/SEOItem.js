import React from 'react';
import Image from "next/image";
import style from '../seo.module.scss'
import Link from "next/link";

const SeoItem = ({item}) => {

  return (
    <>
      <Link href={item.href} data-mouse={'View'} className={`container-img ${style['seo-item__image']}`}>
        <Image src={item.src} fill alt={item.alt}/>
      </Link>
      <div className={style['seo-item__name']}>{item.name}</div>
      <div>{item.position}</div>
    </>
  );
};

export default SeoItem;