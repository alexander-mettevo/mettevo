import React, {useState} from 'react';
import CustomCheckbox from "@/components/reusable/forms/CustomCheckbox";

const Form = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className={'footer-form__content'}>
      <div className={'footer-form__block'}>
        Hello, Mettevo!
      </div>
      <div>
        <label className='footer-form__label input__label'>My name is <input className={'footer-form__input input'} type='text' placeholder='YOUR NAME'/></label>
        <label className='footer-form__label input__label'>from <input className={'footer-form__input input'} type='text' placeholder='WEBSITE OR COMPANY NAME'/></label>
      </div>
      <div>
        <span className='footer-form__checkbox-span' >I’d like to discuss </span>
        <CustomCheckbox id={'checkbox-seo'} checked={checked} setChecked={setChecked} title={'SEO'} />
        <CustomCheckbox id={'checkbox-smm'} title={'SMM'} />
        <CustomCheckbox id={'checkbox-dev'} title={'Web development'} />
        <CustomCheckbox id={'checkbox-design'} title={'Web design'} />
        <CustomCheckbox id={'checkbox-main'} title={'Website maintenance'} />
        <CustomCheckbox id={'checkbox-opt'} title={'Website speed optimization'} />
      </div>
      <div>
        <span className='footer-form__checkbox-span' >A budget for this project is</span>
        <CustomCheckbox id={'checkbox-min'} checked={checked} setChecked={setChecked} title={'<$5k'} />
        <CustomCheckbox id={'checkbox-mid'} title={'$5k-10k'} />
        <CustomCheckbox id={'checkbox-max'} title={'$10k+'} />
      </div>
      <div>
        <label className='footer-form__label input__label'>Contact me back at <input className={'footer-form__input input'} type='email' placeholder='YOUR EMAIL'/></label>
      </div>
      <button className={'button'}>Process my request</button>
    </div>
  );
};

export default Form;