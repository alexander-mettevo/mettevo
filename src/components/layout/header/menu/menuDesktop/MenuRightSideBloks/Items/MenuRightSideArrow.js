import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {switchMobileShowContent, switchShowContent} from "@/store/slices/menuSlice/MenuSlice";

const MenuRightSideArrow = () => {
  const dispatch = useDispatch()
  const {showContent, mobileShowContent} = useSelector(state => state.menu)
  const handleSwitchShowContent = () => {
    if (mobileShowContent) {
      dispatch(switchMobileShowContent())
    }else if (showContent && !mobileShowContent) {
      dispatch(switchShowContent())
    }
  }

  return (
    <div className={'right-side__arrow'}>
      <div className={'right-side__arrow-item'} onClick={handleSwitchShowContent}/>
    </div>
  );
};

export default MenuRightSideArrow;