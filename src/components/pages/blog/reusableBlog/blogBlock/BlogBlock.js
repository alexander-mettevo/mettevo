import React from 'react';
import style from './blog-block.module.scss'
import BlogItem from "@/components/pages/blog/reusableBlog/blogItem/BlogItem";
import BlogBlockItem from "@/components/pages/blog/reusableBlog/blogBlock/BlogBlockItem";

const BlogBlock = ({items}) => {
  return (
    <div className={'block-wrapper'}>
      <h2 className={'block-title'}>
        {items.title}
      </h2>
      <BlogBlockItem items={items}/>
    </div>
  );
};

export default BlogBlock;