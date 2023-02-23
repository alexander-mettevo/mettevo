import React, {useEffect} from 'react';
import HeaderArticleBlog from "@/components/pages/blog/articleBlogPage/items/headerArticleBlog/HeaderArticleBlog";

const ArticleBlogPage = ({data}) => {

  useEffect(() => {
    //TODO как будет возможность реализовать решение без этой грязи (как вариант при обнове на новую структуру некста использовать тут свой layout)
    const style = document.createElement('style');
    style.innerHTML = `
      main > .__container {
        max-width: 100% !important;
        width: auto !important;
        padding: 0 120px; 
      }
      
      @media (max-width: 992px) {
        main > .__container {
          padding: 0 16px;
          }
        }
  `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    }
  }, [])

  return (
    <>
      <HeaderArticleBlog
        title={data.title.rendered}
        author={data._embedded.author}
        image={data._embedded['wp:featuredmedia'][0]}
        themes={data._embedded['wp:term'][0]}
        date={data.date_gmt}
      />
    </>
  );
};

export default ArticleBlogPage;