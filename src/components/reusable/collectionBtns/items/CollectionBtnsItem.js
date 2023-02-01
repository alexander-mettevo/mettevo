import React from 'react';
import {
  CollectionBtnsImageWrapper,
  CollectionBtnsItemWrapper,
  CollectionBtnsTitle
} from "@/components/reusable/collectionBtns/styles";
import renderContent from "@/components/reusable/collectionBtns/items/CollectionBtnsSVGImages/renderContent";

const CollectionBtnsItem = ({item}) => {

  return (
    <CollectionBtnsItemWrapper href={item.href}>
      <CollectionBtnsImageWrapper>
        {renderContent(item.image)}
      </CollectionBtnsImageWrapper>
      <CollectionBtnsTitle>
        {item.title}
      </CollectionBtnsTitle>
    </CollectionBtnsItemWrapper>
  );
};

export default CollectionBtnsItem;