import React, {useEffect, useRef} from 'react';
import numbersAnimationScript from "@/components/reusable/numbers/animationScript";
import style from './numbers.module.scss'

const NumbersItem = (props) => {
  const {value, text, itemClassName, valueClassName, textClassName} = props;

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
    <div className={itemClassName ? itemClassName : style['item-numbers']}>
      <div className={valueClassName ? valueClassName : style['item-numbers__value']} ref={ref}/>
      <div className={textClassName ? textClassName : style['item-numbers__text']}>{text}</div>
    </div>
  );
};

export default NumbersItem;