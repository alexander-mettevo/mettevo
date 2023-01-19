import React from 'react';
import {
  MenuRightSideArrowItem, MenuRightSideArrowWrapper
} from "@/components/layout/header/menu/MenuRightSideBloks/Items/styles";
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
    <MenuRightSideArrowWrapper>
      <MenuRightSideArrowItem onClick={handleSwitchShowContent}/>
    </MenuRightSideArrowWrapper>
  );
};

export default MenuRightSideArrow;