import React, {useEffect, useRef, useState} from 'react';
import {CursorAnimationWrapper} from "@/components/layout/assets/cursotAnimation/styles";
import gsap from "gsap";

const CursorAnimation = () => {
  const [word, setWord] = useState('')
  const ref = useRef(null)

  useEffect(() => {
    if (word.length > 0) {
      gsap.set(".ball", {
        xPercent: 0,
        yPercent: 0,
      });

      const ball = document.querySelector(".ball");
      const pos = {x: window.innerWidth / 2, y: window.innerHeight / 2};
      const mouse = {x: pos.x, y: pos.y};
      const speed = 0.2;

      const xSet = gsap.quickSetter(ball, "x", "px");
      const ySet = gsap.quickSetter(ball, "y", "px");

      window.addEventListener("mousemove", e => {
        mouse.x = e.x;
        mouse.y = e.y;
      });

      gsap.ticker.add(() => {

        // adjust speed for higher refresh monitors
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

        pos.x += (mouse.x - pos.x) * dt;
        pos.y += (mouse.y - pos.y) * dt;
        xSet(pos.x);
        ySet(pos.y);
      });
    }

  }, [word])


  const handleMousePosition = (e) => {
    if (!!e.target.closest && e.target.closest('[data-mouse]') && word !== e.target.closest('[data-mouse]')) {
      setWord(e.target.closest('[data-mouse]').dataset.mouse)
      ref.current.classList.add('show')
    } else if  (word !== '') {
      setWord('')
      ref.current.classList.remove('show')
    }
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMousePosition)

    return () => {
      window.removeEventListener('mousemove', () => {})
    }
  }, [])

  return (
    <>
      <CursorAnimationWrapper ref={ref} className={'ball'}>{word}</CursorAnimationWrapper>
    </>

  );
};

export default CursorAnimation;