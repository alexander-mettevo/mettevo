import React from 'react';
import {TextTitle} from "@/components/layout/header/menu/MenuRightSideBloks/styles";
import ActionsBlockForm from "@/components/layout/header/menu/MenuRightSideBloks/Items/ActionsBlockForm";

const ActionsMonileBlock = () => {
  return (
    <div>
      <div>
        <TextTitle>{currentData.data.title}</TextTitle>
        <div>
          {currentData.data.text}
        </div>
      </div>
      <ActionsBlockForm title={currentData.title}/>
    </div>
  );
};

export default ActionsMonileBlock;