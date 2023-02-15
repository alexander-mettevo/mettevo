import React from 'react';
import BlockTitle from "@/components/reusable/text/blockTitle/BlockTitle";
import StandOutContent from "@/components/pages/homePage/items/standOut/StandOutContent";
import style from './stand-out.module.scss';
const StandOut = ({standOut}) => {

  return (
    <div className='block-wrapper'>
      <div className={style['stand-out__header']}>
        <BlockTitle>
          what makes us stand out
        </BlockTitle>
      </div>
      <StandOutContent standOut={standOut}/>
    </div>
  );
};

export default StandOut;