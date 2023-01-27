import React from 'react';
import {
  CollectionBtnsImageWrapper,
  CollectionBtnsItemWrapper,
  CollectionBtnsTitle
} from "@/components/reusable/collectionBtns/styles";
import Image from "next/image";

const CollectionBtnsItem = ({item}) => {

  return (
    <CollectionBtnsItemWrapper href={item.href}>
      <CollectionBtnsImageWrapper>
        <Image fill src={item.image} alt={item.title}/>
      </CollectionBtnsImageWrapper>
      <CollectionBtnsTitle>
        {item.title}
      </CollectionBtnsTitle>
    </CollectionBtnsItemWrapper>
  );
};

export default CollectionBtnsItem;