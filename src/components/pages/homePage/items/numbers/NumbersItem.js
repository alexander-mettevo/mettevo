import React, {useEffect, useRef} from 'react';
import {NumbersItemText, NumbersItemValue, NumbersItemWrapper} from "@/components/pages/homePage/items/numbers/styles";
import numbersAnimationScript from "@/components/pages/homePage/items/numbers/animationScript";

const parseNumber = (num) => {
  console.log('parseNumber', num.toString().split(''))

  // 1. Найти в строке числа
  // 2. Разбить строку на части (строка если есть)(число)(строка)
  // 3. Заменить число нулем и обернуть в спан с класом .int
  // 4. Повесить на этот span анимацию (для этого вынесем это дело скролла)


}
const NumbersItem = ({value, text}) => {
  const ref = useRef(null);

  parseNumber(value)

  useEffect(() => {
    // numbersAnimationScript(ref, value)
  }, []);

  return (
    <NumbersItemWrapper>
      <NumbersItemValue ref={ref}>0</NumbersItemValue>
      <NumbersItemText>{text}</NumbersItemText>
    </NumbersItemWrapper>
  );
};

export default NumbersItem;