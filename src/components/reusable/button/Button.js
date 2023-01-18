import React from 'react';
import {ButtonWrapper} from "@/components/reusable/btton/styles";

const Button = ({type, text}) => {
  return (
    <ButtonWrapper type={type || 'button'}>
      {text}
    </ButtonWrapper>
  );
};

export default Button;