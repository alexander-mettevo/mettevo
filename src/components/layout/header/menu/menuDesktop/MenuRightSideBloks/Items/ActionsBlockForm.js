import React from 'react';
import SocialRows from "@/components/layout/header/menu/menuDesktop/MenuRightSideBloks/Items/SocialRows";

const ActionsBlockForm = ({title, feedback}) => {
  //todo реализовать отправку формы с помощью данных в параметре feedback

  return (
      <form className={'action-block__form'}>
        <div>
          <label>My name is <input className={'input action-block__input'} placeholder='YOUR NAME' type="text"/></label>
          <label>from <input className={'input action-block__input'} placeholder='COMPANY NAME' type="text"/></label>
        </div>
        <div>
          <label>Contact me back at <input className={'input action-block__input'} placeholder='YOUR PHONE' type="text"/></label>
          <span>or messengers </span>
          <SocialRows/>
        </div>
        <button className={'button'} >{'Get a free ' + title + ' qoute'}</button>
      </form>
  );
};

export default ActionsBlockForm;