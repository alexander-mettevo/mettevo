import React from 'react';
import {useSelector} from "react-redux";
import StandOutItem from "@/components/pages/homePage/items/standOut/StandOutItem";
import useWindowSize from "@/hooks/useWindowSize";
import style from './stand-out.module.scss';
const StandOutContent = () => {
  const data = useSelector(state => state.homePage.homePageStandOutContent);
  const {width} = useWindowSize()

  return (
    <div className={style['stand-out__row']}>
      {
        width < 1100 ? data && data.map((item, index) => (
             <StandOutItem  key={index + 'standOutContent'} item={item}/>
        )) :
          <>
            {data && data.map((item, index) => {
              if (index % 2 === 0) return <StandOutItem key={index + 'standOutContentFirst'} item={item}/>
            })}
            {data && data.map((item, index) => {
              if (index % 2 !== 0) return <StandOutItem  key={index + 'standOutContentTwo'} item={item}/>
            })}
        </>
      }
    </div>
  );
};

export default StandOutContent;