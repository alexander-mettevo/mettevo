import React from 'react';
import Image from "next/image";
import {HomePageBlogItemImage} from "@/components/pages/homePage/items/homePageBlog/styles";
const HomePageBlogItem = ({item}) => {
  console.log('HomePageBlogItem', item)

  return (
    <div>
      <HomePageBlogItemImage>
        <Image src={item.image} fill alt={'post image'}/>
      </HomePageBlogItemImage>

    </div>
  );
};

export default HomePageBlogItem;