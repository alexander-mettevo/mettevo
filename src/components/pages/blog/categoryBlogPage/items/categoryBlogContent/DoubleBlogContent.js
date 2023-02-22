import React from 'react';
import style from './content.module.scss'
import BlogItem from "@/components/pages/blog/reusableBlog/blogItem/BlogItem";

const DoubleBlogContent = ({collection}) => {
  return (
    <div className={`${style['content__row']} ${style['content__double']}`}>
      {collection?.length > 0 && collection.map((post, index) => (
        <BlogItem key={index + 'DoubleBlogContent'} post={post}/>
      ))}
    </div>
  );
};

export default DoubleBlogContent;