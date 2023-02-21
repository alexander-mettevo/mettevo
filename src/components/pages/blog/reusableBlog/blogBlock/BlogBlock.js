import React from 'react';
import style from './blog-block.module.scss'
import BlogItem from "@/components/pages/blog/reusableBlog/blogItem/BlogItem";
console.log(style)

const BlogBlock = ({items}) => {
  return (
    <div className={'block-wrapper'}>
      <h2 className={'block-title'}>
        {items.title}
      </h2>
      <div className={style['blog-block']}>
        <div className={`${style['blog-block__item_1']} ${style['blog-block__big']}`}>
          <BlogItem post={items.posts[0]}/>
        </div>
        <div className={`${style['blog-block__item_2']} ${style['blog-block__mid']}`}><BlogItem post={items.posts[1]}/></div>
        <div className={`${style['blog-block__item_3']} ${style['blog-block__small']}`}>
          <div className="inner-block"><BlogItem post={items.posts[2]}/></div>
          <div className="inner-block"><BlogItem post={items.posts[3]}/></div>
        </div>
      </div>
    </div>
  );
};

export default BlogBlock;