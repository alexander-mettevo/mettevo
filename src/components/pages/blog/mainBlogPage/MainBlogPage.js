import React from 'react';
import PageHeader from "@/components/pages/services/items/pageHeader/PageHeader";
import BlogNavigation from "@/components/pages/blog/mainBlogPage/items/blogNavigation/BlogNavigation";
import BlogTrending from "@/components/pages/blog/mainBlogPage/items/blogTrending/BlogTrending";
import BlogContent from "@/components/pages/blog/mainBlogPage/items/BlogContent";

const MainBlogPage = ({data}) => {

  return (
    <>
      <PageHeader title={data.title}/>
      <BlogNavigation />
      <BlogTrending data={data.trending}/>
      <BlogContent blocks={data.content}/>
    </>
  );
};

export default MainBlogPage;