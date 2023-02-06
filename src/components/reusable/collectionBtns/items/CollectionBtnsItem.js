import React from 'react';
import renderContent from "@/components/reusable/collectionBtns/items/CollectionBtnsSVGImages/renderContent";
import Link from "next/link";

const CollectionBtnsItem = ({item}) => {

  return (
    <Link className={'collection-btns__item'} href={item.href}>
      <div className={'collection-btns__image-wrapper'}>
        {renderContent(item.image)}
      </div>
      <div className={'collection-btns__title'}>
        {item.title}
      </div>
    </Link>
  );
};

export default CollectionBtnsItem;