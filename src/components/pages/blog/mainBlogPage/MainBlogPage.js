import React from 'react';
import PageHeader from "@/components/pages/services/items/pageHeader/PageHeader";
import BlogNavigation from "@/components/pages/blog/mainBlogPage/items/blogNavigation/BlogNavigation";
import BlogTrending from "@/components/pages/blog/mainBlogPage/items/blogTrending/BlogTrending";
import BlogContent from "@/components/pages/blog/mainBlogPage/items/BlogContent";
import LatestArticlesMob from "@/components/pages/blog/mainBlogPage/items/latestArticlesMob/LatestArticlesMob";
import AreYouReady from "@/components/reusable/areYouRedy/AreYouReady";
import BlogForm from "@/components/pages/blog/mainBlogPage/items/blogForm/BlogForm";

const MainBlogPage = ({data}) => {

  return (
    <>
      <PageHeader title={data.title}/>
      <BlogNavigation />
      <LatestArticlesMob articles={data.trending.latestArticles}/>
      <BlogTrending data={data.trending}/>
      <BlogContent blocks={data.content}/>
      <BlogForm/>
      <AreYouReady/>
    </>
  );
};

export default MainBlogPage;