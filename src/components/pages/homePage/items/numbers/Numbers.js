import React from 'react';
import BlockTitle from "@/components/reusable/text/blockTitle/BlockTitle";
import {NumbersHeader, NumbersRow} from "@/components/pages/homePage/items/numbers/styles";
import ArrowLink from "@/components/reusable/links/ArrowLink";

import dynamic from "next/dynamic";
const NumbersItem = dynamic(() => import('@/components/pages/homePage/items/numbers/NumbersItem'), {ssr: false});

const Numbers = () => {
  return (
    <div className='block-wrapper'>
      <NumbersHeader>
        <BlockTitle>
          Mettevo in numbers
        </BlockTitle>
        <ArrowLink href={'/about_us'} title={'about us'}/>
      </NumbersHeader>
      <NumbersRow>
        <NumbersItem text={'years old company'} value={3}/>
        <NumbersItem text={'complete projects'} value={'100+'}/>
        <NumbersItem text={'hours of experience of implementing SEO strategies'} value={'10k'}/>
        <NumbersItem text={'revenue of client’s companies per years'} value={'>$20M '}/>
      </NumbersRow>
    </div>
  );
};

export default Numbers;