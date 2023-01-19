import React, {useState} from 'react';
import {
  FooterFormBlock, FooterFormCheckboxSpan,
  FooterFormContent,
  FooterFormInput,
  FooterFormTextLabel
} from "@/components/layout/footer/footerForm/styles";
import CustomCheckbox from "@/components/reusable/forms/CustomCheckbox";
import Button from "@/components/reusable/button/Button";

const Form = () => {
  const [checked, setChecked] = useState(false);

  return (
    <FooterFormContent>
      <FooterFormBlock>
        Hello, Mettevo!
      </FooterFormBlock>
      <div>
        <FooterFormTextLabel>My name is <FooterFormInput type='text' placeholder='YOUR NAME'/></FooterFormTextLabel>
        <FooterFormTextLabel>from <FooterFormInput type='text' placeholder='WEBSITE OR COMPANY NAME'/></FooterFormTextLabel>
      </div>
      <div>
        <FooterFormCheckboxSpan>I’d like to discuss </FooterFormCheckboxSpan>
        <CustomCheckbox checked={checked} setChecked={setChecked} title={'SEO'} />
        <CustomCheckbox title={'SMM'} />
        <CustomCheckbox title={'Web development'} />
        <CustomCheckbox title={'Web design'} />
        <CustomCheckbox title={'Website maintenance'} />
        <CustomCheckbox title={'Website speed optimization'} />
      </div>
      <div>
        <FooterFormCheckboxSpan>A budget for this project is</FooterFormCheckboxSpan>
        <CustomCheckbox checked={checked} setChecked={setChecked} title={'<$5k'} />
        <CustomCheckbox title={'$5k-10k'} />
        <CustomCheckbox title={'$10k+'} />
      </div>
      <div>
        <FooterFormTextLabel>Contact me back at <FooterFormInput type='email' placeholder='YOUR EMAIL'/></FooterFormTextLabel>
      </div>
      <Button text={'Process my request'}/>
    </FooterFormContent>
  );
};

export default Form;