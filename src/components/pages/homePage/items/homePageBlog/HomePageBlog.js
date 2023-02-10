import React from 'react';
import BlockTitle from "@/components/reusable/text/blockTitle/BlockTitle";
import ArrowLink from "@/components/reusable/links/ArrowLink";
import HomePageBlogItems from "@/components/pages/homePage/items/homePageBlog/items/HomePageBlogItems";
import style from './home-blog.module.scss'

const HomePageBlog = () => {
  return (
    <div className={style['home-blog']}>
      <div className={style['home-blog__header']}>
        <BlockTitle>
          learn with mettevo
        </BlockTitle>
          <ArrowLink href={'/blog'} title={'view blog'} isMarginRight/>
      </div>
      <HomePageBlogItems/>
    </div>
  );
};

export default HomePageBlog;