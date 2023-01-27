import React from 'react';
import {useSelector} from "react-redux";
import HomePageBlogItem from "@/components/pages/homePage/items/homePageBlog/items/HomePageBlogItem";
import {HomePageBlogRow} from "@/components/pages/homePage/items/homePageBlog/styles";

const HomePageBlogItems = () => {
  const data = useSelector(state => state.homePage.homePageBlog)

  return (
    <HomePageBlogRow>
      {data.length > 0 && data.map((item, index) => (
        <HomePageBlogItem item={item} key={index + 'homePageBlog'}/>
      ))}
    </HomePageBlogRow>
  );
};

export default HomePageBlogItems;