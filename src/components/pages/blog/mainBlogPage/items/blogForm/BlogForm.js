import React from 'react';
import style from './form.module.scss'

const BlogForm = () => {
  return (
    <form className={`form ${style['form']}`}>
      <div className={'footer-form__content'}>
        <div className={'footer-form__block'}>
          Don't want to miss anything?
        </div>
        <div>
          <label className='footer-form__label input__label'>
            Leave us
            <input className={'footer-form__input input'} type='text' placeholder='WEBSITE OR COMPANY NAME'/>

          </label>
          and we promise to send weekly updates on the newest design stories, case studies and tips right in your mailbox.
        </div>
        <button className={`button ${style['form__btn']}`}>Submit</button>
      </div>
    </form>
  );
};

export default BlogForm;