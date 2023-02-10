import React from 'react';
import BlockTitle from "@/components/reusable/text/blockTitle/BlockTitle";
import ArrowLink from "@/components/reusable/links/ArrowLink";
import style from './numbers.module.scss'
import dynamic from "next/dynamic";

const NumbersItem = dynamic(() => import('@/components/pages/homePage/items/numbers/NumbersItem'), {ssr: false});

const Numbers = () => {
  return (
    <div className='block-wrapper'>
      <div className={style['numbers__header']}>
        <BlockTitle>
          Mettevo in numbers
        </BlockTitle>
        <ArrowLink href={'/about_us'} title={'about us'}/>
      </div>
      <div className={style['numbers__row']}>
        <NumbersItem text={'years old company'} value={3}/>
        <NumbersItem text={'complete projects'} value={'100+'}/>
        <NumbersItem text={'hours of experience of implementing SEO strategies'} value={'10k'}/>
        <NumbersItem text={'revenue of client’s companies per years'} value={'>$20M '}/>
      </div>
    </div>
  );
};

export default Numbers;