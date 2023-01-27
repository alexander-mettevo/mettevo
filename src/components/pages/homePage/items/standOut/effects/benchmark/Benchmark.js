import React from 'react';
import {
  BenchmarkArrow,
  BenchmarkWord,
  BenchmarkWordWrapper,
  BenchmarkWrapper
} from "@/components/pages/homePage/items/standOut/effects/benchmark/styles";

const word = ['y', 'o', 'u', 'R', 'R', 'O', 'I'];
const Benchmark = () => {


  return (
    <BenchmarkWrapper>
      <BenchmarkArrow/>
      <BenchmarkWordWrapper>
        {word.length > 0 && word.map((letter, index) => (
          <BenchmarkWord key={index + 'bench'} index={index}>{letter}</BenchmarkWord>
        ))}
      </BenchmarkWordWrapper>
    </BenchmarkWrapper>
  );
};

export default Benchmark;