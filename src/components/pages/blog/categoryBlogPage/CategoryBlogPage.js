import React from 'react';
import BlogHeader from "@/components/pages/blog/categoryBlogPage/items/BlogHeader";
import CategoryBlogContent
  from "@/components/pages/blog/categoryBlogPage/items/categoryBlogContent/CategoryBlogContent";
import AreYouReady from "@/components/reusable/areYouRedy/AreYouReady";

const CategoryBlogPage = ({data}) => {
  return (
    <>
      <BlogHeader title={data.title} favorites={data.favorites}/>
      <CategoryBlogContent posts={data.content}/>
      <AreYouReady/>
    </>
  );
};

export default CategoryBlogPage;