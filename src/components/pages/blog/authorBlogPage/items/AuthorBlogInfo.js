import React from 'react';
import Link from "next/link";
import style from './author.module.scss'
import Image from "next/image";

const AuthorBlogInfo = ({info}) => {
  return (
    <div className={style['author__row']}>
      <div className={`${style['author__avatar']} container-img`}>
        <Image fill alt={info.avatar.alt} src={info.avatar.src}/>
      </div>
      <div>
        <div className={style['author__link-row']}>
          {
            info.social?.length > 0 && info.social.map((item, index) => (
              <Link className={`${style['author__link']} underline-link`} href={item.href} target={'_blank'}>{item.title}</Link>
            ))
          }
        </div>
        <div className={style['author__name']}>
          {info.name}
        </div>
        <div>
          {
            info.bio?.length > 0 && info.bio.map((item, index) =>
              (<p className={`${style['author__text']} item-text`} key={index + 'bio'}>{item}</p>))
          }
        </div>
      </div>
    </div>
  );
};

export default AuthorBlogInfo;