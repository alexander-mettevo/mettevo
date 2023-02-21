import React from 'react';
import Link from "next/link";
import dayjs from "dayjs";
import style from './trending.module.scss'

const LatestArticles = ({articles}) => {

  return (
    <div className={style['trending__articles']}>
      <h3 className={'item-title'}>latest articles</h3>
      <ul className={style['trending__list']}>
        {articles.map((article, index) => (
          <li key={index + 'LatestArticles'}>
            <Link href={article.href} target={'_blank'}>
              <div className={`${style['trending__item-top']} text_1`}>
                {dayjs(article.date).format('MMM D, YYYY')}
              </div>
              <div className={'item-text'}>
                {article.title}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestArticles;