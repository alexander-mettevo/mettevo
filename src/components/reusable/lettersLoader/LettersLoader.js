import React, {useEffect, useRef} from 'react';
import {
  LettersLoaderContainer,
  LettersLoaderText,
  LettersLoaderWrapper
} from "@/components/reusable/lettersLoader/styles";
import gsap from "gsap";

const rowLetters = [
  ["T", "M", "M", "M", "M", "M", "M", "M"],
  ["E", "E", "E", "E", "E", "E", "C", "K"],
  ["E", "R", "D", "T", "T", "T", "T", "T"],
  ["T", "T", "T", "T", "H", "K", "C", "N"],
  ["H", "E", "R", "K", "V", "E", "E", "E"],
  ["V", "V", "C", "D", "P", "E", "T", "E"],
  ["M", "R", "T", "T", "K", "D", "N", "O"]
]

const timelineProps = {repeat: 0, defaults: {stagger: 0.05}}

const LettersLoader = () => {
  const ref = useRef(null)
  const wrapperRef = useRef(null)

  useEffect(() => {
    const letterColumns = [...ref.current.childNodes]

    letterColumns.forEach((letters) => {
      const filteredArr = [...letters.childNodes].filter((item, index, arr) => {
        return item.innerHTML !== arr[index + 1]?.innerHTML;
      })

      letters.innerHTML = ''
      filteredArr.forEach((letter) => {
       letters.appendChild(letter)
      })
    })

    letterColumns.forEach((item, index, arr) => {
      let tl = gsap.timeline(timelineProps);
      const letters = [...item.childNodes]

      const yPercentFrom = index % 2 === 0 ? 0 : (-100 * (letters.length - 1))

      const yPercentTo = index % 2 === 0 ? (-100 * (letters.length - 1)) : 0

      tl.from(letters, {yPercent: yPercentFrom});
      tl.to(letters, {duration: letters.length /2.3, yPercent: yPercentTo});
      tl.paused()
    })

    const wrapperTL = gsap.timeline(timelineProps);
    wrapperTL.to(ref.current, {duration: 0.5, yPercent: -100, delay: 5});
    wrapperTL.to(ref.current, {duration: 2, fontSize: '12.5rem'});
    wrapperTL.to(wrapperRef.current, {duration: 2, opacity: 0});


  }, [])

  return (
    <LettersLoaderWrapper ref={wrapperRef}>
      <LettersLoaderContainer>
        <LettersLoaderText ref={ref}>
          {
            rowLetters.map((item, i) => (
              <div key={i + 'a'}>
                {item.map((letter, j) => (
                  <span key={j + 'b'}>
                  {letter}
                </span>
                ))}
              </div>
            ))
          }
        </LettersLoaderText>
      </LettersLoaderContainer>
    </LettersLoaderWrapper>
  );
};

export default LettersLoader;