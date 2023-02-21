import React, {useEffect, useState} from 'react';
import dayjs from "dayjs";
import style from './blog-item.module.scss'
import Link from "next/link";

const BlogItemText = ({theme, title, author, date}) => {
  const [isTitleSmall, setIsTitleSmall] = useState(false);

  useEffect(() => {
    if (!date && !author) setIsTitleSmall(true)
  }, [])

  return (
    <>
      {theme && <div className={style['blog-item__theme']}>{theme}</div>}
      {title && <div className={`${style['blog-item__title']} ${!!isTitleSmall ? style['blog-item__title_sm'] : ''}`}>{title}</div>}
      {author && <Link href={author.profile} className={`${style['blog-item__author']} underline-link`}>{author.name}</Link>}
      {date && <div className={style['blog-item__date']}>{dayjs(date).format('MMM D, YYYY')}</div>}
    </>
  );
};

export default BlogItemText;