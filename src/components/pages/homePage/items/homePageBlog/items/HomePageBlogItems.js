import React from 'react';
import {useSelector} from "react-redux";
import HomePageBlogItem from "@/components/pages/homePage/items/homePageBlog/items/HomePageBlogItem";

const HomePageBlogItems = () => {
  const data = useSelector(state => state.homePage.homePageBlog)

  return (
    <div>
      {data.length > 0 && data.map((item, index) => (
        <HomePageBlogItem item={item} key={index + 'homePageBlog'}/>
      ))}
    </div>
  );
};

export default HomePageBlogItems;