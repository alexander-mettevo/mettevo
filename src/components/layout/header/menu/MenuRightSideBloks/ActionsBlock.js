import React, {useEffect, useState} from 'react';
import MenuBtnsList from "@/components/reusable/MenuBtnsList/MenuBtnsList";
import ActionsBlockForm from "@/components/layout/header/menu/MenuRightSideBloks/Items/ActionsBlockForm";
import {useDispatch} from "react-redux";
import {switchMobileShowContent} from "@/store/slices/menuSlice/MenuSlice";
import ActionsMobileBlock from "@/components/layout/header/menu/MenuRightSideBloks/Items/ActionsMobileBlock";
import Link from "next/link";
import ArrowLink from "@/components/reusable/links/arrowLink/ArrowLink";

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
    <div className={'action-block'}>
      <div className={'action-block__wrapper'}>
        <div className={'action-block__list'}>
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
        </div>

        <div className={'action-block__desktop'}>
          <div>
            <h4 className={'right-side__title'}>{currentData.data.title}</h4>
            <div>
              {currentData.data.text}
            </div>
          </div>
          <div >
            <ArrowLink href={currentData.data.href || '/'} title={'Go to page'}/>
          </div>
        </div>
      </div>
      <div className={'action-block__desktop'}>
        <ActionsBlockForm title={currentData.title}/>
      </div>
      <ActionsMobileBlock currentData={currentData}/>
    </div>
  );
};

export default ActionsBlock;