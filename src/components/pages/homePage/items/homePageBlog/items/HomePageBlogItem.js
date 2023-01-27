import React from 'react';
import Image from "next/image";
import {
  HomePageBlogItemDate,
  HomePageBlogItemImage,
  HomePageBlogItemTheme,
  HomePageBlogItemTitle, HomePageBlogItemWrapper
} from "@/components/pages/homePage/items/homePageBlog/styles";
import dayjs from "dayjs";
const HomePageBlogItem = ({item}) => {

  return (
    <HomePageBlogItemWrapper href={item.href}>
      <HomePageBlogItemImage data-mouse={'Read'}>
        <Image src={item.image} fill alt={'post image'}/>
      </HomePageBlogItemImage>
      <div>
        <HomePageBlogItemTheme>{item.theme}</HomePageBlogItemTheme>
        <HomePageBlogItemTitle>{item.title}</HomePageBlogItemTitle>
        <HomePageBlogItemDate>{dayjs(item.date).format('MMM D, YYYY')}</HomePageBlogItemDate>
      </div>
    </HomePageBlogItemWrapper>
  );
};

export default HomePageBlogItem;