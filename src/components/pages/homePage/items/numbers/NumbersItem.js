import React, {useEffect, useRef} from 'react';
import numbersAnimationScript from "@/components/pages/homePage/items/numbers/animationScript";
import style from './numbers.module.scss'
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
    <div className={style['item-numbers']}>
      <div className={style['item-numbers__value']} ref={ref}/>
      <div className={style['item-numbers__text']}>{text}</div>
    </div>
  );
};

export default NumbersItem;