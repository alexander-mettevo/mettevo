import React from 'react';
import BlogBlockItem from "@/components/pages/blog/reusableBlog/blogBlock/BlogBlockItem";
import LatestArticles from "@/components/pages/blog/mainBlogPage/items/blogTrending/LatestArticles";
import style from './trending.module.scss'

const BlogTrending = ({data}) => {
  console.log('BlogTrending', data.posts);

  return (
    <div className={'block-wrapper'}>
      <h2 className={'block-title block-title_right'}>trending</h2>
      <div className={style['trending']}>
        <LatestArticles articles={data.latestArticles}/>
        <BlogBlockItem items={data}/>
      </div>
    </div>
  );
};

export default BlogTrending;