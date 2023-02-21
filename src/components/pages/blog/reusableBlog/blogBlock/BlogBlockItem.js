import React from 'react';
import style from "@/components/pages/blog/reusableBlog/blogBlock/blog-block.module.scss";
import BlogItem from "@/components/pages/blog/reusableBlog/blogItem/BlogItem";

const BlogBlockItem = ({items}) => {
  return (
    <div className={style['blog-block']}>
      <div className={`${style['blog-block__item_1']} ${style['blog-block__big']}`}>
        <BlogItem post={items.posts[0]}/>
      </div>
      <div className={`${style['blog-block__item_2']} ${style['blog-block__mid']}`}><BlogItem post={items.posts[1]}/></div>
      <div className={`${style['blog-block__item_3']} ${style['blog-block__small']}`}>
        <div className="inner-block"><BlogItem post={items.posts[2]}/></div>
        {!!items?.posts[3] && <div className="inner-block"><BlogItem post={items.posts[3]}/></div>}
      </div>
    </div>
  );
};

export default BlogBlockItem;