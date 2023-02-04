import React from 'react';
import Link from "next/link";

const ArrowLink = ({href, title, isMarginRight}) => {
  return (
    <div className={`arrow-link ${isMarginRight && 'arrow-link_mr'}`}>
      <Link className={'arrow-link__link-item'} href={href}>
        {title}
      </Link>
      <div className={'arrow-link__items-wrapper'}>
        <span className={'arrow-link__link-line'}/>
        <span className={'arrow-link__link-rectangle'}/>
      </div>
    </div>
  );
};

export default ArrowLink;