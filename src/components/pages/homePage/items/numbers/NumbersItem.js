import React from 'react';
import {NumbersItemText, NumbersItemValue, NumbersItemWrapper} from "@/components/pages/homePage/items/numbers/styles";

const NumbersItem = ({value, text}) => {
  return (
    <NumbersItemWrapper>
      <NumbersItemValue>{value}</NumbersItemValue>
      <NumbersItemText>{text}</NumbersItemText>
    </NumbersItemWrapper>
  );
};

export default NumbersItem;