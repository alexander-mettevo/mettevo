import React, {useState} from 'react';
import MenuLeftSide from "@/components/layout/header/menu/menuDesktop/MenuLeftSide";
import MenuRightSide from "@/components/layout/header/menu/menuDesktop/MenuRightSide";
import MenuBottom from "@/components/layout/header/menu/menuDesktop/MenuBottom";
import {useSelector} from "react-redux";
import MenuBtnsList from "@/components/reusable/MenuBtnsList/MenuBtnsList";

const MenuDesktop = ({active}) => {
  const menu = useSelector(state => state.menu.menu)
  const [currentState, setCurrentState] = useState(menu[0])

  const handleMenuState = (id) => {
    setCurrentState(menu.find(item => item.id === id))
  }

  return (
    <div className={`top-menu top-menu__desktop ${active && 'top-menu_active'}`}>
      <div className={`top-menu__container ${active && 'top-menu__container_active'}`}>
        <div className={'top-menu__content'}>
          <div className={'top-menu__left-side'}>
            <MenuBtnsList
              currentState={currentState.id}
              list={menu}
              onClickItem={handleMenuState}
              keyWord={"mainMenuLeft"}
              desktopFS={'2rem'}
              mobileFS={'1.5rem'}
              rectangleSize={'10px 0 10px 12px'}
              adaptiveRectangleSize={'8px 0 8px 10px'}
            />
          </div>
          <MenuRightSide rightSideData={currentState.data}/>
        </div>
        <MenuBottom/>
      </div>
    </div>
  );
};

export default MenuDesktop;