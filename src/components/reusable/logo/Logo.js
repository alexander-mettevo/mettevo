import React from 'react';
import Link from "next/link";
import style from './logo.module.scss';

const Logo = () => (
    <Link className={style['logo']} href={'/'}>
      <div className={style['logo__top']}>METTEVO</div>
      <div className={style['logo__bottom']}>DIGITAL AGENCY</div>
    </Link>
  );

export default Logo;