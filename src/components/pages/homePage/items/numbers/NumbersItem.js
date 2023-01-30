import React, {useEffect, useRef, useState} from 'react';
import {NumbersItemText, NumbersItemValue, NumbersItemWrapper} from "@/components/pages/homePage/items/numbers/styles";
import numbersAnimationScript from "@/components/pages/homePage/items/numbers/animationScript";

const NumbersItem = ({value, text}) => {
  const ref = useRef(null);

  const parseNumber = (num) => {
    const reg = /\d+/g;
    const str = num.toString();
    const selectedNumber = str.match(reg);
    ref.current.innerHTML = str.replace(selectedNumber[0], '<span class="int">0</span>');

    return selectedNumber[0];
  }


  useEffect(() => {
    const number = +parseNumber(value);
    numbersAnimationScript(ref, number)
  }, [value]);

  return (
    <NumbersItemWrapper>
      <NumbersItemValue ref={ref}/>
      <NumbersItemText>{text}</NumbersItemText>
    </NumbersItemWrapper>
  );
};

export default NumbersItem;