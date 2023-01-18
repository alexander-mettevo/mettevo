import React from 'react';
import {ButtonWrapper} from "@/components/reusable/button/styles";

const Button = ({type, text}) => {
  return (
    <ButtonWrapper type={type || 'button'}>
      {text}
    </ButtonWrapper>
  );
};

export default Button;