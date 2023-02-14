import React from 'react';
import AlignContent from "@/components/reusable/text/alignContetn/AlignContent";

const TopText = ({text}) => {
  return (
    <AlignContent>
      <div className={'text_1'}>
        {text}
      </div>
    </AlignContent>
  );
};

export default TopText;