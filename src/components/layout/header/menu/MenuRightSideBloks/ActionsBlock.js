import React, {useEffect, useState} from 'react';
import MenuBtnsList from "@/components/reusable/MenuBtnsList/MenuBtnsList";
import {
  ActionBlockContainer,
  ActionBlockList,
  ActionBlockText,
  ActionBlockWrapper,
  TextTitle
} from "@/components/layout/header/menu/MenuRightSideBloks/styles";
import ActionsBlockForm from "@/components/layout/header/menu/MenuRightSideBloks/Items/ActionsBlockForm";
import {useDispatch} from "react-redux";
import {switchMobileShowContent} from "@/store/slices/headerMenuSlice/HeaderMenuSlice";
import {ActionsDesktopBlockItems} from "@/components/layout/header/menu/MenuRightSideBloks/Items/styles";
import ActionsMobileBlock from "@/components/layout/header/menu/MenuRightSideBloks/Items/ActionsMobileBlock";

const ActionsBlock = ({list}) => {
  const [currentItem, setCurrentItem] = useState(list[0].id)
  const [currentData, setCurrentData] = useState(list[0])
  const dispatch = useDispatch()

  useEffect(() => {
    const data = list.find(item => item.id === currentItem)
    setCurrentData(data)
  }, [currentItem])

  const handleSetCurrentItem = (id) => {
    setCurrentItem(id)
    dispatch(switchMobileShowContent())
  }

  return (
    <ActionBlockContainer>
      <ActionBlockWrapper>
        <ActionBlockList>
          <MenuBtnsList
            currentState={currentItem}
            list={list}
            onClickItem={handleSetCurrentItem}
            keyWord={"itemMenu"}
            desktopFS={'1.25rem'}
            mobileFS={'1.5rem'}
            noteFS={'1.25rem'}
            rectangleSize={'4.5px 0 4.5px 6px'}
            adaptiveRectangleSize={'4.5px 0 4.5px 6px'}
          />
        </ActionBlockList>

        <ActionsDesktopBlockItems>
          <TextTitle>{currentData.data.title}</TextTitle>
          <div>
            {currentData.data.text}
          </div>
        </ActionsDesktopBlockItems>
      </ActionBlockWrapper>
      <ActionsDesktopBlockItems>
        <ActionsBlockForm title={currentData.title}/>
      </ActionsDesktopBlockItems>
      <ActionsMobileBlock currentData={currentData}/>
    </ActionBlockContainer>
  );
};

export default ActionsBlock;