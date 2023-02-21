import React from 'react';
import Image from "next/image";
import Link from "next/link";
import style from '../home-blog.module.scss'
import BlogItemText from "@/components/pages/blog/reusableBlog/blogItem/BlogItemText";

const HomePageBlogItem = ({item}) => {
  const {image, theme, title, date, href} = item

  return (
    <Link className={style['home-blog__item']} href={href}>
      <div className={`${style['home-blog__image']} container-img`} data-mouse={'Read'}>
        <Image src={image} fill alt={'post image'}/>
      </div>
      <div>
        <BlogItemText theme={theme} title={title} date={date} />
      </div>
    </Link>
  )
};


export default HomePageBlogItem;