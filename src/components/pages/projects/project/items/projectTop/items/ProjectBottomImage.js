import React from 'react';
import Image from "next/image";
import style from '../project-top.module.scss'

const ProjectBottomImage = ({image}) => {
  return (
    <div className={style['project-top__bottom-image']}>
      <Image src={image.src} fill alt={image.alt}/>
    </div>
  );
};

export default ProjectBottomImage;