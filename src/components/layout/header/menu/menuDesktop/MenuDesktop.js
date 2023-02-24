import React, {useState} from 'react';
import MenuLeftSide from "@/components/layout/header/menu/menuDesktop/MenuLeftSide";
import MenuRightSide from "@/components/layout/header/menu/menuDesktop/MenuRightSide";
import MenuBottom from "@/components/layout/header/menu/menuDesktop/MenuBottom";

const MenuDesktop = ({active}) => {
  const [menuState, setMenuState] = useState(1)

  return (
    <div className={`top-menu top-menu__desktop ${active && 'top-menu_active'}`}>
      <div className={`top-menu__container ${active && 'top-menu__container_active'}`}>
        <div className={'top-menu__content'}>
          <MenuLeftSide menuState={menuState} setMenuState={setMenuState}/>
          <MenuRightSide menuState={menuState}/>
        </div>
     <MenuBottom/>
      </div>
    </div>
  );
};

export default MenuDesktop;