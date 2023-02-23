import React from 'react';
import Link from "next/link";
import dayjs from "dayjs";
import Image from "next/image";
import style from './author.module.scss'

const HeaderArticleBlogAuthor = ({author, themes, date}) => {

  return (
    <div className={style['author']}>
      <div className={style['author__image-wrapper']}>
        <Image width={40} height={40} src={author.avatar_urls['48']} alt={author.name}/>
      </div>
      <div className={style['author__text']}>
        <div>
          <Link className={'underline-link'} href={`/blog/author/${author.slug}`}>{author.name}</Link>
        </div>
        <div>
          {themes?.length > 0 && themes.map((theme, index) =>
            <span key={index + 'theme'}>{theme.name}&nbsp;</span>
          )}
        </div>
        <div>{dayjs(date).format('MMM D, YYYY')}</div>
      </div>
    </div>
  );
};

export default HeaderArticleBlogAuthor;