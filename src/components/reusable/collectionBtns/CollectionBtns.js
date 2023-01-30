import React from 'react';
import {useSelector} from "react-redux";
import BlockTitle from "@/components/reusable/text/blockTitle/BlockTitle";
import CollectionBtnsItem from "@/components/reusable/collectionBtns/CollectionBtnsItem";
import {CollectionBtnsRow, CollectionBtnsWrapper} from "@/components/reusable/collectionBtns/styles";


const CollectionBtns = () => {
  const data = useSelector(state => state.collectionBtns.initialData);

  return (
    <CollectionBtnsWrapper>
      <BlockTitle>
        We have expertise in the most competitive niches
      </BlockTitle>
      <CollectionBtnsRow>
        {data.map((item, index) => (
            <CollectionBtnsItem key={index + 'CollectionBtns'} item={item}/>
          ))}
      </CollectionBtnsRow>
    </CollectionBtnsWrapper>
  );
};

export default CollectionBtns;