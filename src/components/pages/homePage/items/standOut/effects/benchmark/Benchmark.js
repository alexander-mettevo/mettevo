import React, {useEffect, useRef} from 'react';
import showBenchmarkAnimationScript from "@/components/pages/homePage/items/standOut/effects/benchmark/animationScript";

const word = ['y', 'o', 'u', 'R', 'R', 'O', 'I'];
const Benchmark = () => {

  const lettersRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    showBenchmarkAnimationScript(lettersRef, lineRef)
  }, [])

  return (
    <div className={'stand-out__effect'}>
      <div className={'benchmark__arrow'} ref={lineRef}/>
      <div className={'benchmark__word-wrapper'} ref={lettersRef}>
        {word?.length > 0 && word.map((letter, index) => (
          <span className={`benchmark__word benchmark__word_${index}`} key={index + 'bench'}>{letter}</span>
        ))}
      </div>
    </div>
  );
};

export default Benchmark;