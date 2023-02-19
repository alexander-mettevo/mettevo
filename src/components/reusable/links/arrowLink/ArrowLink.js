import React from 'react';
import Link from "next/link";
import style from './ArrowLink.module.scss';

const ArrowLink = ({href, title, isMarginRight, ...props}) => {
  return (
    <div className={`${style['arrow-link']} ${isMarginRight && style['arrow-link_mr']}`}>
      <Link className={style['arrow-link__link-item']} href={href} {...props}>
        {title}
      </Link>
      <div className={style['arrow-link__items-wrapper']}>
        <span className={style['arrow-link__link-line']}/>
        <span className={style['arrow-link__link-rectangle']}/>
      </div>
    </div>
  );
};

export default ArrowLink;