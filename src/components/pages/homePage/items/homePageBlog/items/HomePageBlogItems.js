import React, {useEffect, useRef} from 'react';
import {useSelector} from "react-redux";
import HomePageBlogItem from "@/components/pages/homePage/items/homePageBlog/items/HomePageBlogItem";
import homePageBlogAnimationScript from "@/components/pages/homePage/items/homePageBlog/animationScript";
import style from '../home-blog.module.scss'
const HomePageBlogItems = () => {
  const data = useSelector(state => state.homePage.homePageBlog)
  const ref = useRef(null);


  useEffect(() => {
    homePageBlogAnimationScript(ref)
  }, [])

  return (
    <div className={style['home-blog__row']} ref={ref}>
      {data.length > 0 && data.map((item, index) => (
        <HomePageBlogItem item={item} key={index + 'homePageBlog'}/>
      ))}
    </div>
  );
};

export default HomePageBlogItems;