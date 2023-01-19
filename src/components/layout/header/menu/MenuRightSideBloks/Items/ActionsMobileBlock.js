import React from 'react';
import {TextTitle} from "@/components/layout/header/menu/MenuRightSideBloks/styles";
import ActionsBlockForm from "@/components/layout/header/menu/MenuRightSideBloks/Items/ActionsBlockForm";
import {ActionsMobileBlockWrapper} from "@/components/layout/header/menu/MenuRightSideBloks/Items/styles";
import {useSelector} from "react-redux";

const ActionsMobileBlock = ({currentData}) => {
  const mobileShowContent = useSelector(state => state.menu.mobileShowContent)

  return (
    <ActionsMobileBlockWrapper mobileShowContent={mobileShowContent}>
      {currentData && (
      <>
        <div>
          <TextTitle>{currentData.data.title}</TextTitle>
          <div>
            {currentData.data.text}
          </div>
        </div>
        <ActionsBlockForm title={currentData.title}/>
      </>
        )}

    </ActionsMobileBlockWrapper>
  );
};

export default ActionsMobileBlock;