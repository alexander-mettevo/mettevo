import React from 'react';
import {StandOutContentRow} from "@/components/pages/homePage/items/standOut/styles";
import {useSelector} from "react-redux";
import StandOutItem from "@/components/pages/homePage/items/standOut/StandOutItem";
import useWindowSize from "@/hooks/useWindowSize";

const StandOutContent = () => {
  const data = useSelector(state => state.homePage.homePageStandOutContent);
  const {width} = useWindowSize()

  return (
    <StandOutContentRow>
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
    </StandOutContentRow>
  );
};

export default StandOutContent;