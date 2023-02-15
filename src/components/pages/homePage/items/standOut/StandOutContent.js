import React from 'react';
import StandOutItem from "@/components/pages/homePage/items/standOut/StandOutItem";
import useWindowSize from "@/hooks/useWindowSize";
import style from './stand-out.module.scss';

const StandOutContent = ({standOut}) => {
  const {width} = useWindowSize()

  return (
    <div className={style['stand-out__row']}>
      {
        width < 1100 ? standOut && standOut.map((item, index) => (
             <StandOutItem  key={index + 'standOutContent'} item={item}/>
        )) :
          <>
            {standOut && standOut.map((item, index) => {
              if (index % 2 === 0) return <StandOutItem key={index + 'standOutContentFirst'} item={item}/>
            })}
            {standOut && standOut.map((item, index) => {
              if (index % 2 !== 0) return <StandOutItem  key={index + 'standOutContentTwo'} item={item}/>
            })}
        </>
      }
    </div>
  );
};

export default StandOutContent;