import React, {useEffect, useRef} from 'react';
import Image from "next/image";
import {
  StoriesItemImageWrapper,
  StoriesItemSubtitle,
  StoriesItemTitle
} from "@/components/pages/homePage/items/stories/styles";
import showFromBottom from "@/components/reusable/animations/showFromBottom";

const StoriesItem = ({item}) => {
  const ref = useRef(null);

  useEffect(() => {showFromBottom(ref)}, []);

  return (
    <div ref={ref}>
      <StoriesItemImageWrapper href={item.href} data-mouse={'View'} width={item.image.size.width} height={item.image.size.height}>
        <Image fill src={item.image.src} alt={item.title} />
      </StoriesItemImageWrapper>

      <p className='item-text'>
        <StoriesItemTitle>{item.title} </StoriesItemTitle>
        -
        <StoriesItemSubtitle> {item.subtitle}</StoriesItemSubtitle>
      </p>
    </div>
  );
};

export default StoriesItem;