import React from 'react';
import BlockTitle from "@/components/reusable/text/blockTitle/BlockTitle";
import Spoiler from "@/components/reusable/spoiler/Spoiler";
import style from './asked.module.scss';

const Asked = ({data}) => {
  return (
    <div className={`${style.asked} block-wrapper`}>
      <div  className={style['asked__body']}>
        <BlockTitle>
          Frequently Asked Questions
        </BlockTitle>
        <div className={style['asked__content']}>
          <Spoiler list={data}/>
        </div>
      </div>
    </div>
  );
};

export default Asked;