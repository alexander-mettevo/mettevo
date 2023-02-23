import React from 'react';
import style from './content.module.scss'

const ContentArticleBlog = ({content}) => {
  return (
    <div className={style['content']} dangerouslySetInnerHTML={{__html: content}}>

    </div>
  );
};

export default ContentArticleBlog;