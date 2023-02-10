import React from 'react';
import BlackAndGray from "@/components/reusable/text/textComponents/BlackAndGray";
import Image from "next/image";
import style from '../featured-projects.module.scss'
import Link from "next/link";

const FeaturedProjectItem = ({item}) => {
  return (
    <Link href={item.href} data-mouse={'View'} className={style['featured-projects__item']}>
      <div style={{'--img-height': item.height + 'px'}} className={`${style['featured-projects__image-container']} container-img`}>
        <Image src={item.image} fill alt={'Featured project image'}/>
      </div>
      <BlackAndGray item={item}/>
    </Link>
  );
};

export default FeaturedProjectItem;