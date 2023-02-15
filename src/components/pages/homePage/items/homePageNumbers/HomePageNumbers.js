import React from 'react';
import style from "@/components/reusable/numbers/numbers.module.scss";
import BlockTitle from "@/components/reusable/text/blockTitle/BlockTitle";
import ArrowLink from "@/components/reusable/links/arrowLink/ArrowLink";
import Numbers from "@/components/reusable/numbers/Numbers";

const HomePageNumbers = ({numbers}) => {
  return (
    <div className='block-wrapper'>
      <div className={style['numbers__header']}>
        <BlockTitle>
          Mettevo in numbers
        </BlockTitle>
        <ArrowLink href={'/company/about-us'} title={'about us'}/>
      </div>
      <Numbers numbers={numbers}/>
    </div>
  );
};

export default HomePageNumbers;