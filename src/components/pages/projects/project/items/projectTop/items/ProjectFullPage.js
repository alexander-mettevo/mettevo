import React from 'react';
import Image from "next/image";
import style from '../project-top.module.scss'

const ProjectFullPage = ({image}) => {

  return (
    <>
      <div className={style['project-top__image-wrapper']}>
        <div>
          <Image fill src={image.src} alt={image.alt}/>
        </div>
      </div>
      <div className={style['project-top__gasket']}/>
    </>
  );
};

export default ProjectFullPage;