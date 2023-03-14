import React from 'react';
import Link from "next/link";

const SimpleBlock = ({list, moreLink}) => {

  return (
    <div className={'simple-block'}>
      <ul>
        {list?.length > 0 && list.map((item, index) => (
          <li key={index + 'simpleBlock'}>
            <Link href={item.href} className={'simple-block__title underline-link'}>{item.title}</Link>
            <div className={'simple-block__text'}>{item.description}</div>
          </li>
        ))}
      </ul>
      {!!moreLink && <Link className='simple-block__link-more underline-link' href={moreLink.href}>{moreLink.title}</Link>}
    </div>

  );
};

export default SimpleBlock;