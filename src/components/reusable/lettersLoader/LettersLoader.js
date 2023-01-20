import React, {useEffect, useRef, useState} from 'react';
import {LettersLoaderText, LettersLoaderWrapper} from "@/components/reusable/lettersLoader/styles";
import gsap from "gsap";
import styled from "styled-components";

const letters = [
  [ "T", "K", "E", "N", "H", "E", "M" ],
  [ "M", "C", "R", "C", "E", "T", "R" ],
  [ "M", "E", "D", "K", "R", "E", "T" ],
  [ "M", "E", "T", "H", "K", "P", "T" ],
  [ "M", "E", "T", "T", "V", "D", "K" ],
  [ "M", "E", "T", "T", "E", "C", "D" ],
  [ "M", "E", "T", "T", "E", "V", "N" ],
  [ "M", "E", "T", "T", "E", "V", "O" ]
]

const Word = styled.div`
  display: inline-block;
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  transform-origin: center;
`;

const LettersLoader = () => {
  const words = ["TKENHEM", "MCRCETR", "MEDKRET", "METHKPT", "METTVDK", "METTECD", "METTEVN", "METTEVO"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, []);

useEffect(() => {
  const timeline = gsap.timeline();
  timeline
    .to(ref.current, { rotate: 360, duration: 1, ease: "power1.inOut" })
    .set(ref.current, { text: words[currentIndex]})
    .set(ref.current, { text: words[currentIndex + 1]});
  timeline.repeat(-1);
  setCurrentIndex(currentIndex + 1);
}, [])


  return (
    <LettersLoaderWrapper>
      <LettersLoaderText >
        { <Word ref={ref}>{words[currentIndex]}</Word>}
      </LettersLoaderText>
    </LettersLoaderWrapper>
  );
};

export default LettersLoader;