import React from 'react';
import SpoilerItem from "@/components/reusable/spoiler/SpoilerItem";


const Spoiler = ({list}) => {
  return (
    <div className={'spollers'}>
      {list.length > 0 && list.map((item, index) => (
        <SpoilerItem item={item} key={index + 'spoiler'}/>
      ))}
    </div>
  );
};

export default Spoiler;