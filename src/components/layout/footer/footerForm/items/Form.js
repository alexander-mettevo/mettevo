import React, {useState} from 'react';
import {
  FooterFormBlock, FooterFormCheckboxSpan,
  FooterFormContent,
  FooterFormInput,
  FooterFormTextLabel
} from "@/components/layout/footer/footerForm/styles";
import CustomCheckbox from "@/components/reusable/forms/CustomCheckbox";

const Form = () => {
  const [checked, setChecked] = useState(false);

  return (
    <FooterFormContent>
      <FooterFormBlock>
        Hello, Mettevo!
      </FooterFormBlock>
      <div>
        <FooterFormTextLabel className='input__label'>My name is <FooterFormInput className={'input'} type='text' placeholder='YOUR NAME'/></FooterFormTextLabel>
        <FooterFormTextLabel className='input__label'>from <FooterFormInput className={'input'} type='text' placeholder='WEBSITE OR COMPANY NAME'/></FooterFormTextLabel>
      </div>
      <div>
        <FooterFormCheckboxSpan>I’d like to discuss </FooterFormCheckboxSpan>
        <CustomCheckbox id={'checkbox-seo'} checked={checked} setChecked={setChecked} title={'SEO'} />
        <CustomCheckbox id={'checkbox-smm'} title={'SMM'} />
        <CustomCheckbox id={'checkbox-dev'} title={'Web development'} />
        <CustomCheckbox id={'checkbox-design'} title={'Web design'} />
        <CustomCheckbox id={'checkbox-main'} title={'Website maintenance'} />
        <CustomCheckbox id={'checkbox-opt'} title={'Website speed optimization'} />
      </div>
      <div>
        <FooterFormCheckboxSpan>A budget for this project is</FooterFormCheckboxSpan>
        <CustomCheckbox id={'checkbox-min'} checked={checked} setChecked={setChecked} title={'<$5k'} />
        <CustomCheckbox id={'checkbox-mid'} title={'$5k-10k'} />
        <CustomCheckbox id={'checkbox-max'} title={'$10k+'} />
      </div>
      <div>
        <FooterFormTextLabel className='input__label'>Contact me back at <FooterFormInput className={'input'} type='email' placeholder='YOUR EMAIL'/></FooterFormTextLabel>
      </div>
      <button className={'button'}>Process my request</button>
    </FooterFormContent>
  );
};

export default Form;