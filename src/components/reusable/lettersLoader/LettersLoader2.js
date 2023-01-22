import React, {useEffect, useRef, useState} from 'react';
import {LettersLoaderText, LettersLoaderWrapper} from "@/components/reusable/lettersLoader/styles";
import gsap from "gsap";
import styled from "styled-components";

const letters = [
  ["T", "K", "E", "N", "H", "E", "M"],
  ["M", "C", "R", "C", "E", "T", "R"],
  ["M", "E", "D", "K", "R", "E", "T"],
  ["M", "E", "T", "H", "K", "P", "T"],
  ["M", "E", "T", "T", "V", "D", "K"],
  ["M", "E", "T", "T", "E", "C", "D"],
  ["M", "E", "T", "T", "E", "V", "N"],
  ["M", "E", "T", "T", "E", "V", "O"]
]

const timelineProps = {repeat: -1, defaults: {stagger: 0.05}}

// сюда бы как то прокинуть предыдущи элемент из другого массива
const moveItem = (mode, tl, item) => {

  if (mode === 'y') {
    tl.from(item, {y: -100, ease: "expo.out"}, "<0.3");
    tl.to(item, {delay: 3, y: 100, ease: "expo.in"});
  } else if (mode === '-y') {
    tl.from(item, {y: 100, ease: "expo.out"}, "<0.3");
    tl.to(item, {delay: 3, y: -100, ease: "expo.in"});
  } else {
    tl.from(item, {y: 0, ease: "expo.out"}, "<0.3");
    tl.to(item, {delay: 3, y: 0, ease: "expo.in"});
  }
}


// сначала надо отсеять статику а после уже вешать анимацию и на обычные элементы
const LettersLoader2 = () => {
  const ref = useRef(null)

  // useEffect(() => {
  //   let tl1 = gsap.timeline(timelineProps);
  //   let tl2 = gsap.timeline(timelineProps);
  //   const words = [...ref.current.childNodes]
  //
  //   const staticItems = []
  //   const otherItems = [...words[0].childNodes]
  //
  //   words.forEach((word, indexWord) => {
  //     const items = [...word.childNodes]
  //     items.forEach((item, index) => {
  //       const everyFirst = [...word.childNodes].filter((el, index) => index % 2 !== 0);
  //       const everyTwo = [...word.childNodes].filter((el, index) => index % 2 === 0)
  //
  //       moveItem("-y", tl1, everyFirst)
  //       moveItem("y", tl2, everyTwo)
  //
  //     })
  //
  //   }, [])

    //Так терь надо будет сделать так что бы нынешний элемент смотрел на следующий и ели тот === ему
    // то тогда следует менять их без анимации

    return (
      <LettersLoaderWrapper>
        <LettersLoaderText ref={ref}>
          {
            letters.map((item, i) => (
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
      </LettersLoaderWrapper>
    );
  };

  export default LettersLoader2;