import React from 'react';
import BlogBlock from "@/components/pages/blog/reusableBlog/blogBlock/BlogBlock";
import style from '../main-blog.module.scss'

const BlogContent = ({blocks}) => (
    <div className={style['blog-content']}>
      {blocks.length > 0 && blocks.map((block, index) => <BlogBlock key={index + 'BlogContent'} items={block}/>)}
    </div>
  );


export default BlogContent;