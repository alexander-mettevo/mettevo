import React from 'react';
import style from './align-content.module.scss';

const AlignContent = ({children}) => {
  return (
    <div className={style['align-content']}>
      <div className={style['align-content__box']}>
        {children}
      </div>
    </div>
  );
};

export default AlignContent;