import React from 'react';
import AreYouReady from "@/components/reusable/areYouRedy/AreYouReady";
import CategoryBlogContent
  from "@/components/pages/blog/categoryBlogPage/items/categoryBlogContent/CategoryBlogContent";
import AuthorBlogInfo from "@/components/pages/blog/authorBlogPage/items/AuthorBlogInfo";

const AuthorBlogPage = ({data}) => {
  return (
    <>
      <AuthorBlogInfo info={data.info}/>
      <CategoryBlogContent posts={data.content}/>
      <AreYouReady/>
    </>
  );
};

export default AuthorBlogPage;