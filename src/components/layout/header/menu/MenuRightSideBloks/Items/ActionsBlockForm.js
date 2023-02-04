import React from 'react';
import {
  ActionsBlockFormInput,
  ActionsBlockFormWrapper,
} from "@/components/layout/header/menu/MenuRightSideBloks/Items/styles";
import SocialRows from "@/components/layout/header/menu/MenuRightSideBloks/Items/SocialRows";

const ActionsBlockForm = ({title}) => {
  return (

      <ActionsBlockFormWrapper>
        <div>
          <label>My name is <ActionsBlockFormInput className={'input'} placeholder='YOUR NAME' type="text"/></label>
          <label>from <ActionsBlockFormInput className={'input'} placeholder='COMPANY NAME' type="text"/></label>
        </div>
        <div>
          <label>Contact me back at <ActionsBlockFormInput className={'input'} placeholder='YOUR PHONE' type="text"/></label>
          <span>or messengers </span>
          <SocialRows/>
        </div>
        <button className={'button'} >{'Get a free ' + title + ' qoute'}</button>
      </ActionsBlockFormWrapper>
  );
};

export default ActionsBlockForm;