import React from 'react';
import BlogHeader from "@/components/pages/blog/categoryBlogPage/items/BlogHeader";
import CategoryBlogContent
  from "@/components/pages/blog/categoryBlogPage/items/categoryBlogContent/CategoryBlogContent";

const CategoryBlogPage = ({data}) => {
  return (
    <>
      <BlogHeader title={data.title} favorites={data.favorites}/>
      <CategoryBlogContent posts={data.content}/>
    </>
  );
};

export default CategoryBlogPage;