import React from 'react';
import {useSelector} from "react-redux";
import BlockTitle from "@/components/reusable/text/blockTitle/BlockTitle";
import CollectionBtnsItem from "@/components/reusable/collectionBtns/items/CollectionBtnsItem";


const CollectionBtns = () => {
  const data = useSelector(state => state.collectionBtns.initialData);

  return (
    <div className={'collection-btns'}>
      <BlockTitle>
        We have expertise in the most competitive niches
      </BlockTitle>
      <div className={'collection-btns__row'}>
        {data.map((item, index) => (
            <CollectionBtnsItem key={index + 'CollectionBtns'} item={item}/>
          ))}
      </div>
    </div>
  );
};

export default CollectionBtns;