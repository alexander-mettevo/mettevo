import React from 'react';
import Link from "next/link";

const Logo = () => (
    <Link className={'logo'} href={'/'}>
      <div className={'logo__top'}>METTEVO</div>
      <div className={'logo__bottom'}>DIGITAL AGENCY</div>
    </Link>
  );

export default Logo;