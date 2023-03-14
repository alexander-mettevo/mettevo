import React from 'react';
import Link from "next/link";
import style from './header-article.module.scss'
import HeaderArticleBlogAuthor
  from "@/components/pages/blog/articleBlogPage/items/headerArticleBlog/items/headerArticleBlogAuthor/HeaderArticleBlogAuthor";
import HeaderArticleBlogLinks
  from "@/components/pages/blog/articleBlogPage/items/headerArticleBlog/items/headerArticleBlogLinks/HeaderArticleBlogLinks";
import Image from "next/image";

const HeaderArticleBlog = ({title, image, author, themes, date}) => {

  return (
    <div className={style['header-article']}>
      <div className={style['header-article__content']}>
        <h1 className={style['header-article__title']}>
          {title}
        </h1>
        <HeaderArticleBlogAuthor themes={themes} author={author[0]} date={date}/>
        <HeaderArticleBlogLinks/>
      </div>
      <div className={style['header-article__empty']}/>
      <div className={style['header-article__image-wrapper']}>
        <div className={style['header-article__image']}>
          <Image fill src={image.media_details.sizes.full.source_url} alt={image.alt_text}/>
        </div>
      </div>
    </div>
  );
};

export default HeaderArticleBlog;