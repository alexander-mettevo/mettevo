import React from 'react';
import style from './certifications.module.scss'
import Link from "next/link";
import Image from "next/image";

const Certifications = ({certifications}) => {
  return (
    <div className={'block-wrapper'}>
      <div className={'block-title block-title_right'}>
        Certifications
      </div>
      <div className={style['certifications__grid']}>
        {certifications.map((item, index) => (
          <Link key={index + 'certifications'} className={`${style['certifications__link']} wrapper-img`} href={item.href}>
            <Image src={item.src} alt={item.alt} fill className={'custom-img'}/>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Certifications;