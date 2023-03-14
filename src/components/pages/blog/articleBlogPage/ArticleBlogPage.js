import React, {useEffect} from 'react';
import HeaderArticleBlog from "@/components/pages/blog/articleBlogPage/items/headerArticleBlog/HeaderArticleBlog";
import ContentArticleBlog from "@/components/pages/blog/articleBlogPage/items/contentArticleBlog/ContentArticleBlog";
import AreYouReady from "@/components/reusable/areYouRedy/AreYouReady";
import HomePageBlog from "@/components/pages/homePage/items/homePageBlog/HomePageBlog";
import TagsAndAsksArticleBlog
  from "@/components/pages/blog/articleBlogPage/items/tagsAndAsksArticleBlog/TagsAndAsksArticleBlog";

const latestBlog = [
  {
    title: 'Venenatis tincidunt phasellus nec aliquam.',
    theme: 'theme 1',
    date: '2022-12-01T00:00:00.000Z',
    image: '/images/home_page/blog/first.png',
    href: '/'
  },
  {
    title: 'Venenatis tincidunt phasellus nec aliquam.',
    theme: 'theme 1',
    date: '2022-12-01T00:00:00.000Z',
    image: '/images/home_page/blog/second.png',
    href: '/'
  },
  {
    title: 'Venenatis tincidunt phasellus nec aliquam.',
    theme: 'theme 1',
    date: '2022-12-01T00:00:00.000Z',
    image: '/images/home_page/blog/last.png',
    href: '/'
  }
]

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
      <ContentArticleBlog content={data.content.rendered}/>
      <TagsAndAsksArticleBlog tags={data._embedded['wp:term'][1]}/>
      <HomePageBlog blog={latestBlog}/>
      <AreYouReady/>
    </>
  );
};

export default ArticleBlogPage;