import React, {useState} from 'react';
import {MenuContent, MenuContentRow, MenuWrapper} from "@/components/layout/header/menu/styles";
import MenuLeftSide from "@/components/layout/header/menu/MenuLeftSide";
import MenuRightSide from "@/components/layout/header/menu/MenuRightSide";
import MenuBottom from "@/components/layout/header/menu/MenuBottom";
import MobileNavigation from "@/components/layout/header/navigation/MobileNavigation";

const Menu = ({active}) => {
  const [menuState, setMenuState] = useState(1)

  return (
    <MenuWrapper active={active}>
      <MenuContent active={active}>
        <MobileNavigation/>
        <MenuContentRow>
          <MenuLeftSide menuState={menuState} setMenuState={setMenuState}/>
          <MenuRightSide menuState={menuState}/>
        </MenuContentRow>
        <MenuBottom/>
      </MenuContent>

    </MenuWrapper>
  );
};

export default Menu;