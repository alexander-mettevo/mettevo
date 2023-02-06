import React, {useEffect, useRef} from 'react';
import LettersLoader from "@/components/reusable/text/animationTitlePage/lettersLoader/LettersLoader";
import {useSelector} from "react-redux";
import titlePageAnimationScript from "@/components/reusable/text/animationTitlePage/animationScript";

const AnimationTitlePage = ({subtitle, text}) => {
  const rowLetters = useSelector((state) => state.animation.homePageRowLetters)
  const titlePageWrapperRef = useRef(null)
  const titlePageContentRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    titlePageAnimationScript(rowLetters, titlePageWrapperRef, titlePageContentRef, textRef
    )
  }, [])

  return (
    <div className={'title-page'} data-mouse={'Scroll'}>
      <div ref={titlePageWrapperRef}>
        <LettersLoader rowLetters={rowLetters} textRef={textRef}/>

        <div ref={titlePageContentRef}>
          {!!subtitle && <h2 className={'title-page__subtitle'}>{subtitle}</h2>}
          {!!text && <p className='item-text'>{text}</p>}
        </div>
      </div>
    </div>
  );
};

export default AnimationTitlePage;