import React, {useEffect, useRef} from 'react';
import {
  BenchmarkArrow,
  BenchmarkWord,
  BenchmarkWordWrapper,
  BenchmarkWrapper
} from "@/components/pages/homePage/items/standOut/effects/benchmark/styles";
import showBenchmarkAnimationScript from "@/components/pages/homePage/items/standOut/effects/benchmark/animationScript";

const word = ['y', 'o', 'u', 'R', 'R', 'O', 'I'];
const Benchmark = () => {

  const lettersRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    showBenchmarkAnimationScript(lettersRef, lineRef)
  }, [])

  return (
    <BenchmarkWrapper>
      <BenchmarkArrow ref={lineRef}/>
      <BenchmarkWordWrapper ref={lettersRef}>
        {word?.length > 0 && word.map((letter, index) => (
          <BenchmarkWord key={index + 'bench'} index={index}>{letter}</BenchmarkWord>
        ))}
      </BenchmarkWordWrapper>
    </BenchmarkWrapper>
  );
};

export default Benchmark;