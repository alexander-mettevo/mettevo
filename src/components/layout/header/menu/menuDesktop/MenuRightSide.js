import React, {useEffect, useState} from 'react';
import ActionsBlock from "@/components/layout/header/menu/menuDesktop/MenuRightSideBloks/ActionsBlock";
import {useSelector} from "react-redux";
import SimpleBlock from "@/components/layout/header/menu/menuDesktop/MenuRightSideBloks/SimpleBlock";
import MenuRightSideArrow from "@/components/layout/header/menu/menuDesktop/MenuRightSideBloks/Items/MenuRightSideArrow";

const MenuRightSide = ({rightSideData}) => {

  return (
    <div className={`top-menu__right-side`}>
      <div className={'right-side__content'}>
        <div className={'right-side__wrapper'}>
          {rightSideData.links.type === 'actions' && !!rightSideData.links?.menuList && <ActionsBlock feedback={rightSideData.feedback} list={rightSideData.links.menuList}/>}
          {rightSideData.links.type === 'simple' && !!rightSideData.links?.menuList && <SimpleBlock list={rightSideData.links.menuList} moreLink={rightSideData.links.moreLink}/>}
        </div>
      </div>
    </div>
  )

};

export default MenuRightSide;