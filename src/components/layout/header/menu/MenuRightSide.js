import React, {useEffect, useState} from 'react';
import ActionsBlock from "@/components/layout/header/menu/MenuRightSideBloks/ActionsBlock";
import {useSelector} from "react-redux";
import SimpleBlock from "@/components/layout/header/menu/MenuRightSideBloks/SimpleBlock";
import { MenuRightSideContainer, MenuRightSideWrapper} from "@/components/layout/header/menu/styles";
import MenuRightSideArrow from "@/components/layout/header/menu/MenuRightSideBloks/Items/MenuRightSideArrow";
import {ContentWrapper} from "@/components/layout/header/menu/MenuRightSideBloks/styles";

const MenuRightSide = ({menuState}) => {
  const rightSideData = useSelector(state => state.headerMenu.rightSideData)
  const showContent = useSelector(state => state.headerMenu.showContent)
  const [currentData, setCurrentData] = useState(rightSideData[0])

  useEffect(() => {
    const data = rightSideData.find(item => item.id === menuState)
    setCurrentData(data)
  }, [menuState])

  return (
    <MenuRightSideWrapper showContent={showContent}>
      <MenuRightSideContainer>
        <MenuRightSideArrow/>
        <ContentWrapper>
          {currentData.type === 'actions' && !!currentData?.menuList && <ActionsBlock list={currentData.menuList}/>}
          {currentData.type === 'simple' && !!currentData?.list && <SimpleBlock list={currentData?.list} moreLink={currentData.moreLink}/>}
        </ContentWrapper>
      </MenuRightSideContainer>
    </MenuRightSideWrapper>
  )

};

export default MenuRightSide;