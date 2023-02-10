import React from 'react';
import style from './page-header.module.scss'

const PageHeader = ({url, title}) => {
  return (
    <div className={`${style['page-header']} title-page`}>
      <div className={style["page-header__url"]}>
        {url}
      </div>
      <h2 className={style["page-header__subtitle"]}>mettevo</h2>
      <h1 className={`${style["page-header__title"]} ${title.length > 14 && style["page-header__title_long"]}`}>{title}</h1>
    </div>
  );
};

export default PageHeader;