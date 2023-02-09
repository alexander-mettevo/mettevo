import React, {useEffect, useRef} from 'react';
import showBenchmarkAnimationScript from "@/components/pages/homePage/items/standOut/effects/benchmark/animationScript";
import style from './benchmark.module.scss'
import mainStyle from '../../stand-out.module.scss';

const word = ['y', 'o', 'u', 'R', 'R', 'O', 'I'];
const Benchmark = () => {

  const lettersRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    showBenchmarkAnimationScript(lettersRef, lineRef)
  }, [])

  return (
    <div className={mainStyle['stand-out__effect']}>
      <div className={style['benchmark__arrow']} ref={lineRef}/>
      <div className={style['benchmark__word-wrapper']} ref={lettersRef}>
        {word?.length > 0 && word.map((letter, index) => (
          <span className={`${style['benchmark__word']} ${style[`benchmark__word_${index}`]}`} key={index + 'bench'}>{letter}</span>
        ))}
      </div>
    </div>
  );
};

export default Benchmark;