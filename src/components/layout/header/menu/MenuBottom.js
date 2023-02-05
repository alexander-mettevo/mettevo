import React from 'react';
import Link from "next/link";

const MenuBottom = () => {
  return (
    <div className={'top-menu__bottom-row'}>
      <Link className='underline-link' href={'test'}>Facebook</Link>
      <Link className='underline-link' href={'test'}>Instagram</Link>
      <Link className='underline-link' href={'test'}>TikTok</Link>
      <Link className='underline-link' href={'test'}>Linkedin</Link>
    </div>
  );
};

export default MenuBottom;