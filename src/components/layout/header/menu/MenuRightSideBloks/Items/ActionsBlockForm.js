import React from 'react';
import {
  ActionsBlockFormInput,
  ActionsBlockFormWrapper, SocialRowsBlock
} from "@/components/layout/header/menu/MenuRightSideBloks/Items/styles";
import SocialRows from "@/components/layout/header/menu/MenuRightSideBloks/Items/SocialRows";
import Button from "@/components/reusable/button/Button";

const ActionsBlockForm = ({title}) => {
  return (

      <ActionsBlockFormWrapper>
        <div>
          <label>My name is <ActionsBlockFormInput placeholder='YOUR NAME' type="text"/></label>
          <label>from <ActionsBlockFormInput placeholder='COMPANY NAME' type="text"/></label>
        </div>
        <div>
          <label>Contact me back at <ActionsBlockFormInput placeholder='YOUR PHONE' type="text"/></label>
          <span>or messengers </span>
          <SocialRows/>
        </div>
        <Button text={'Get a free ' + title + ' qoute'}/>
      </ActionsBlockFormWrapper>
  );
};

export default ActionsBlockForm;