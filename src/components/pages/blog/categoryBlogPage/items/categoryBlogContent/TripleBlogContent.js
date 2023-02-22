import React from 'react';
import style from './content.module.scss'
import BlogItem from "@/components/pages/blog/reusableBlog/blogItem/BlogItem";

const TripleBlogContent = ({collection}) => {
  return (
    <div className={`${style['content__row']} ${style['content__triple']}`}>
      {collection?.length > 0 && collection.map((post, index) => (
        <BlogItem key={index + 'TripleBlogContent'} post={post}/>
      ))}
    </div>
  );
};

export default TripleBlogContent;