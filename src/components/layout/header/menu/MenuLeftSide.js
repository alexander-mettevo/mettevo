import React from 'react';
import MenuBtnsList from "@/components/reusable/MenuBtnsList/MenuBtnsList";
import {useDispatch, useSelector} from "react-redux";
import {switchShowContent} from "@/store/slices/menuSlice/MenuSlice";

const MenuLeftSide = ({menuState, setMenuState}) => {
  const menuItems = useSelector(state => state.menu.menuItems)
  const dispatch = useDispatch()
  const handleMenuState = (id) => {
    setMenuState(id)
    dispatch(switchShowContent())
  }

  return (
    <div className={'top-menu__left-side'}>
      <MenuBtnsList
        currentState={menuState}
        list={menuItems}
        onClickItem={handleMenuState}
        keyWord={"mainMenuLeft"}
        desktopFS={'2rem'}
        mobileFS={'1.5rem'}
        rectangleSize={'10px 0 10px 12px'}
        adaptiveRectangleSize={'8px 0 8px 10px'}
      />
    </div>
  );
};

export default MenuLeftSide;