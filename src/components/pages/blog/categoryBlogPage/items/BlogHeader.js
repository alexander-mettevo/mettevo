import React from 'react';
import style from '../category-blog.module.scss'
import BlogBlockItem from "@/components/pages/blog/reusableBlog/blogBlock/BlogBlockItem";

const BlogHeader = ({title, favorites}) => {
  return (
    <div>
      <div className={style['category-blog__url']}>blog / {title} </div>
      <h1 className={style['category-blog__title']}>{title}</h1>
      <BlogBlockItem items={favorites}/>
    </div>
  );
};

export default BlogHeader;