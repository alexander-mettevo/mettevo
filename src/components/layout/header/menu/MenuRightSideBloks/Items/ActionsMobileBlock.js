import React from 'react';
import ActionsBlockForm from "@/components/layout/header/menu/MenuRightSideBloks/Items/ActionsBlockForm";
import {useSelector} from "react-redux";

const ActionsMobileBlock = ({currentData}) => {
  const mobileShowContent = useSelector(state => state.menu.mobileShowContent)

  return (
    <div className={`right-side__mobile-wrapper ${mobileShowContent && 'right-side__mobile-wrapper_show'}`}>
      {currentData && (
      <>
        <div>
          <h4 className={'right-side__title'}>{currentData.data.title}</h4>
          <div>
            {currentData.data.text}
          </div>
        </div>
        <ActionsBlockForm title={currentData.title}/>
      </>
        )}

    </div>
  );
};

export default ActionsMobileBlock;