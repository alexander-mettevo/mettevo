import React from 'react';
import {MenuBtnsListItem, MenuBtnsListWrapper} from "@/components/reusable/MenuBtnsList/styles";
import Link from "next/link";

const MenuBtnsList = ({
                        list,
                        currentState,
                        onClickItem,
                        keyWord,
                        desktopFS,
                        mobileFS,
                        rectangleSize,
                        adaptiveRectangleSize,
                        noteFS
}) => {
  return (
    <MenuBtnsListWrapper
      desktopFS={desktopFS}
      mobileFS={mobileFS}
      noteFS={noteFS}
    >
      {list.length > 0 && list.map((item, index) => {
        if (!item.link) {
          return (
            <MenuBtnsListItem
              onClick={() => onClickItem(item.id)}
              checked={currentState === item.id}
              key={index + keyWord}
              rectangleSize={rectangleSize}
              adaptiveRectangleSize={adaptiveRectangleSize}
            >{item.title}</MenuBtnsListItem>
          )
        } else {
          return (
            <MenuBtnsListItem
              checked={currentState === item.id}
              key={index + keyWord}
              rectangleSize={rectangleSize}
              adaptiveRectangleSize={adaptiveRectangleSize}
            >
              <Link href={item.link.href}>{item.title}</Link>
            </MenuBtnsListItem>
          )
        }
      })}
    </MenuBtnsListWrapper>
  );
};

export default MenuBtnsList;