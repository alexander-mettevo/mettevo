import React from 'react';
import BlockTitle from "@/components/reusable/text/blockTitle/BlockTitle";
import ArrowLink from "@/components/reusable/links/ArrowLink";
import {HomePageBlogHeader, HomePageBlogWrapper} from "@/components/pages/homePage/items/homePageBlog/styles";
import HomePageBlogItems from "@/components/pages/homePage/items/homePageBlog/items/HomePageBlogItems";

const HomePageBlog = () => {
  return (
    <HomePageBlogWrapper>
      <HomePageBlogHeader>
        <BlockTitle>
          learn with mettevo
        </BlockTitle>
          <ArrowLink href={'/blog'} title={'view blog'} isMarginRight/>
      </HomePageBlogHeader>
      <HomePageBlogItems/>
    </HomePageBlogWrapper>
  );
};

export default HomePageBlog;