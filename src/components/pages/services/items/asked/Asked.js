import React from 'react';
import BlockTitle from "@/components/reusable/text/blockTitle/BlockTitle";
import Spoiler from "@/components/reusable/spoiler/Spoiler";
import seoServices from "@/mocData/services/seoServices";

const Asked = () => {
  return (
    <div className='block-wrapper'>
      <div>
        <BlockTitle>
          Frequently Asked Questions
        </BlockTitle>
        <div>
          <Spoiler list={seoServices.asked}/>
        </div>
      </div>
    </div>
  );
};

export default Asked;