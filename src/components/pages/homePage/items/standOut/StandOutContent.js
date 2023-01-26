import React from 'react';
import {StandOutContentRow} from "@/components/pages/homePage/items/standOut/styles";
import {useSelector} from "react-redux";
import StandOutItem from "@/components/pages/homePage/items/standOut/StandOutItem";

const StandOutContent = () => {
  const data = useSelector(state => state.homePage.homePageStandOutContent);

  return (
    <StandOutContentRow>
      {data && data.map((item, index) => (
          <StandOutItem  key={index + 'standOutContent'} item={item}/>
      ))}
    </StandOutContentRow>
  );
};

export default StandOutContent;