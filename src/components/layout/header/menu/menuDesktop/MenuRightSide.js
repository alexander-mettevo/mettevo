import React, {useEffect, useState} from 'react';
import ActionsBlock from "@/components/layout/header/menu/menuDesktop/MenuRightSideBloks/ActionsBlock";
import {useSelector} from "react-redux";
import SimpleBlock from "@/components/layout/header/menu/menuDesktop/MenuRightSideBloks/SimpleBlock";
import MenuRightSideArrow from "@/components/layout/header/menu/menuDesktop/MenuRightSideBloks/Items/MenuRightSideArrow";

const MenuRightSide = ({menuState}) => {
  const rightSideData = useSelector(state => state.menu.rightSideData)
  const showContent = useSelector(state => state.menu.showContent)
  const [currentData, setCurrentData] = useState(rightSideData[0])

  useEffect(() => {
    const data = rightSideData.find(item => item.id === menuState)
    setCurrentData(data)
  }, [menuState])

  return (
    <div className={`top-menu__right-side ${showContent && 'top-menu__right-side_show'}`}>
      <div className={'right-side__content'}>
        <div className={'right-side__wrapper'}>
          {currentData.type === 'actions' && !!currentData?.menuList && <ActionsBlock list={currentData.menuList}/>}
          {currentData.type === 'simple' && !!currentData?.list && <SimpleBlock list={currentData?.list} moreLink={currentData.moreLink}/>}
        </div>
      </div>
    </div>
  )

};

export default MenuRightSide;