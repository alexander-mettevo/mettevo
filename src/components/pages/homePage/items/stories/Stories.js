import React from 'react';
import BlockTitle from "@/components/reusable/text/blockTitle/BlockTitle";
import ArrowLink from "@/components/reusable/links/arrowLink/ArrowLink";
import style from './stories.module.scss'
import ImageLink from "@/components/reusable/links/imageLink/ImageLink";

const Stories = ({stories}) => {

  return (
    <div className={`block-wrapper ${style['stories']}`}>
      <div className={style['stories__title']}>
        <BlockTitle>
          our stories and case studies
        </BlockTitle>
      </div>
      <div className={style['stories__grid']}>
        {
          stories?.length > 0 && stories.map((item, index) => (
            <ImageLink item={item} key={index + 'Stories'}/>
          ))
        }
        <div>
          <ArrowLink href={'/projects'} title={'view all work'}/>
        </div>
      </div>
    </div>
  );
};

export default Stories;