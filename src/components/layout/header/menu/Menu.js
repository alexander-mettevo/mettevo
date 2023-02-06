import React, {useState} from 'react';
import MenuLeftSide from "@/components/layout/header/menu/MenuLeftSide";
import MenuRightSide from "@/components/layout/header/menu/MenuRightSide";
import MenuBottom from "@/components/layout/header/menu/MenuBottom";
import MobileNavigation from "@/components/layout/header/navigation/MobileNavigation";
import {useSelector} from "react-redux";

const Menu = ({active}) => {
  const [menuState, setMenuState] = useState(1)

  return (
    <div className={`top-menu ${active && 'top-menu_active'}`}>
      <div className={`top-menu__container ${active && 'top-menu__container_active'}`}>
        <MobileNavigation/>
        <div className={'top-menu__content'}>
          <MenuLeftSide menuState={menuState} setMenuState={setMenuState}/>
          <MenuRightSide menuState={menuState}/>
        </div>
     <MenuBottom/>
      </div>
    </div>
  );
};

export default Menu;