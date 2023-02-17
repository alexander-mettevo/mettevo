import React, {useEffect, useState} from 'react';
import style from '../project-content.module.scss'
import Image from "next/image";

const ProjectContentItem = ({item}) => {
  const [imageClass, setImageClass] = useState('')

  useEffect(() => {
    if (item?.images?.length === 2) {
      setImageClass(style[`project-content__image-wrapper_double`])
    } else if(item?.images?.length > 2) {
      setImageClass(style[`project-content__image-wrapper_mod`])
    }
  }, [])



  return (
    <div className={'block-wrapper'}>
      <div className={style['project-content__block']}>
        <div className={style['project-content__text']}>
          <h2 className={'block-title'}>{item.title}</h2>
          <p className={'text_1'}>{item.text}</p>
          {item.bio && <span  className={`${style['project-content__bio']} text_1`}>{item.bio}</span>}
        </div>
      </div>
      {
        item?.images?.length > 0 &&
        <div
          className={`${style['project-content__image-wrapper']} ${imageClass}`}>
          {item.images.map((image, index) => (
            <div className={'wrapper-img'} key={index + 'project-img'}>
              <Image fill src={image.src} alt={image.alt}/>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default ProjectContentItem;