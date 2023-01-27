import React from 'react';
import Image from "next/image";
import {
  StoriesItemImageWrapper,
  StoriesItemSubtitle,
  StoriesItemTitle
} from "@/components/pages/homePage/items/stories/styles";
import {ItemText} from "@/components/reusable/text/styles";

const StoriesItem = ({item}) => {
  return (
    <div>
      <StoriesItemImageWrapper href={item.href} data-mouse={'View'} width={item.image.size.width} height={item.image.size.height}>
        <Image fill src={item.image.src} alt={item.title} />
      </StoriesItemImageWrapper>

      <ItemText>
        <StoriesItemTitle>{item.title} </StoriesItemTitle>
        -
        <StoriesItemSubtitle> {item.subtitle}</StoriesItemSubtitle>
      </ItemText>
    </div>
  );
};

export default StoriesItem;