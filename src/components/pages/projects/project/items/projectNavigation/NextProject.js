import React from 'react';
import Link from "next/link";
import style from './next-project.module.scss'
import Image from "next/image";

const NextProject = ({nextProject}) => {
  return (
    <div className={`${style['next-project']} block-wrapper`}>
      <Link className={`${style['next-project__link']}`} href={nextProject.href}>
        <div className={`${style['next-project__next']} ${style['next-project__item']}`}>
          <Image fill src={nextProject.leftImage.src} alt={nextProject.leftImage.alt}/>
          <span>next</span>
        </div>
        <div className={`${style['next-project__project']} ${style['next-project__item']}`}>
          <Image fill src={nextProject.rightImage.src} alt={nextProject.rightImage.alt}/>
          <span>project</span>
        </div>
      </Link>
    </div>
  );
};

export default NextProject;