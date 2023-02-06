import React from 'react';
import Link from "next/link";

const FooterBottom = () => {
  return (
    <div className={'footer-bottom'}>
      <div className={'footer-bottom__policy'}>
        <span>© Mettevo 2020 - 2022 | All rights reserved.</span>
        <Link href='/policy'>Privacy Policy</Link>
      </div>

      <div className={'footer-bottom__links'}>
        <span>FolLow us:</span>
        <Link href='/'>Facebook</Link>
        <Link href='/'>Instagram</Link>
        <Link href='/'>TikTok</Link>
        <Link href='/'>Linkedin</Link>
      </div>
    </div>
  );
};

export default FooterBottom;