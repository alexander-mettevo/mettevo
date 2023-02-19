import React from 'react';
import ArrowLink from "@/components/reusable/links/arrowLink/ArrowLink";
import style from '../project-top.module.scss'

const ProjectMid = ({title, text, tags, href}) => {
  return (
    <>
      <div className={style['project-top__top-row']}>
        <div>
          <h1 className={'title_3'}>{title}</h1>
          <p className={`${style['project-top__text']} ${style['project-top__text_m']} text_2`}>
            {text}
          </p>
          <div className={style['project-top__row']}>
            <div className={style['project-top__tags-row']}>
              {tags.map((tag, index) => (
                <div className={style['project-top__tag-item']} key={index + 'project'}>
                  <div className={`${style['project-top__tag-type']} text_1`}>{tag.type}</div>
                  <div className={`${style['project-top__tag-title']} text_2`}>{tag.title}</div>
                </div>
              ))}
            </div>
            <ArrowLink title={'visit website'} href={href} target={'_blank'}/>
          </div>
        </div>
        <p className={`${style['project-top__text']} ${style['project-top__text_d']} text_2`}>
          {text}
        </p>
      </div>
    </>
  );
};

export default ProjectMid;