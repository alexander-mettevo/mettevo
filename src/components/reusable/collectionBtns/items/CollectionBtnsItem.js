import React from 'react';
import renderContent from "@/components/reusable/collectionBtns/items/CollectionBtnsSVGImages/renderContent";
import Link from "next/link";
import style from '../CollectionBtns.module.scss';

const CollectionBtnsItem = ({item}) => {

  return (
    <Link className={style.CollectionBtns__item} href={item.href}>
      <div className={style['CollectionBtns__image-wrapper']}>
        {renderContent(item.image)}
      </div>
      <div className={'title_1'}>
        {item.title}
      </div>
    </Link>
  );
};

export default CollectionBtnsItem;