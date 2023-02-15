import React, {useEffect, useRef} from 'react';
import HomePageBlogItem from "@/components/pages/homePage/items/homePageBlog/items/HomePageBlogItem";
import homePageBlogAnimationScript from "@/components/pages/homePage/items/homePageBlog/animationScript";
import style from '../home-blog.module.scss'

const HomePageBlogItems = ({blog}) => {
  const ref = useRef(null);


  useEffect(() => {
    homePageBlogAnimationScript(ref)
  }, [])

  return (
    <div className={style['home-blog__row']} ref={ref}>
      {blog.length > 0 && blog.map((item, index) => (
        <HomePageBlogItem item={item} key={index + 'homePageBlog'}/>
      ))}
    </div>
  );
};

export default HomePageBlogItems;