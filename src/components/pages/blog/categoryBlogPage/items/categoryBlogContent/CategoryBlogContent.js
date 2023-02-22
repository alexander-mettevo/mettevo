import React from 'react';
import TripleBlogContent from "@/components/pages/blog/categoryBlogPage/items/categoryBlogContent/TripleBlogContent";
import DoubleBlogContent from "@/components/pages/blog/categoryBlogPage/items/categoryBlogContent/DoubleBlogContent";

const CategoryBlogContent = ({posts}) => {
  return (
    <>
      {posts?.length > 0 && posts.map((collection, index) => {
        if (collection.length === 3) return <TripleBlogContent key={index + 'CategoryBlogContent'} collection={collection}/>
        if (collection.length <= 2) return <DoubleBlogContent key={index + 'CategoryBlogContent'} collection={collection}/>
      })}
    </>
  );
};

export default CategoryBlogContent;