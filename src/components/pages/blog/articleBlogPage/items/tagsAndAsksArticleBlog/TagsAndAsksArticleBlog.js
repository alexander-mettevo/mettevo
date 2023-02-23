import React from 'react';
import Asked from "@/components/pages/services/items/asked/Asked";
import Link from "next/link";
import style from './tags.module.scss'

const asked = [
  {
    title: 'How is your SEO service unique to those offered by other agencies?',
    text: 'From the start, our SEO professionals will perform a deep analysis of your business to understand the market you’re competing in and the specific practices your competitors engage in online. We choose the keywords for your campaign, the structure of your website, and the channels we focus on for off-page optimization based on the results of this analysis. Our research-oriented method ensures that results are consistently achieved rather than taking a “one-size-fits-all” approach. You can expect your SEO campaign to be a long-term investment, often requiring 3–6 months before seeing a return. What sets us apart from the competition is the long-term results we achieve. Instead of getting your name ranked and then subsequently losing it, we work to establish your brand as an authority, encouraging search engines to consistently feature your pages at the top of the results.'
  },
  {
    title: 'How does DMA charge for SEO services?',
    text: 'From the start, our SEO professionals will perform a deep analysis of your business to understand the market you’re competing in and the specific practices your competitors engage in online. We choose the keywords for your campaign, the structure of your website, and the channels we focus on for off-page optimization based on the results of this analysis. Our research-oriented method ensures that results are consistently achieved rather than taking a “one-size-fits-all” approach. You can expect your SEO campaign to be a long-term investment, often requiring 3–6 months before seeing a return. What sets us apart from the competition is the long-term results we achieve. Instead of getting your name ranked and then subsequently losing it, we work to establish your brand as an authority, encouraging search engines to consistently feature your pages at the top of the results.'
  },
  {
    title: 'How do I know if I am the right fit for DMA\'s SEO services?',
    text: 'From the start, our SEO professionals will perform a deep analysis of your business to understand the market you’re competing in and the specific practices your competitors engage in online. We choose the keywords for your campaign, the structure of your website, and the channels we focus on for off-page optimization based on the results of this analysis. Our research-oriented method ensures that results are consistently achieved rather than taking a “one-size-fits-all” approach. You can expect your SEO campaign to be a long-term investment, often requiring 3–6 months before seeing a return. What sets us apart from the competition is the long-term results we achieve. Instead of getting your name ranked and then subsequently losing it, we work to establish your brand as an authority, encouraging search engines to consistently feature your pages at the top of the results.'
  },
]

const TagsAndAsksArticleBlog = ({tags}) => {
  return (
    <div className={style['tags']}>
      <div  className={style['tags_list']}>
      <div className={style['tags__tag-title']}>Tags:</div>
        <ul>
          {tags?.length > 0 && tags.map((tag, index) => (
            <li key={index + 'tag'}>
              <Link className={style['tags__tag-link']} href={`/blog/tag/${tag.slug}`}>
                {tag.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Asked data={asked}/>
    </div>
  );
};

export default TagsAndAsksArticleBlog;