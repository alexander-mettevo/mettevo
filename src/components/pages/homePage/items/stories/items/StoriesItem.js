import React from 'react';
import Image from "next/image";
import {
  StoriesItemImageWrapper,
  StoriesItemSubtitle,
  StoriesItemTitle
} from "@/components/pages/homePage/items/stories/styles";

const StoriesItem = ({item}) => {
  return (
    <div>
      <StoriesItemImageWrapper>
        <Image fill src={item.image} alt={item.title}/>
      </StoriesItemImageWrapper>
      <div>
        <StoriesItemTitle>{item.title} </StoriesItemTitle>
        -
        <StoriesItemSubtitle> {item.subtitle}</StoriesItemSubtitle>
      </div>
    </div>
  );
};

export default StoriesItem;