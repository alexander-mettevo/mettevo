import React, {useEffect, useRef} from 'react';
import {TitlePageSubtitle, TitlePageWrapper} from "@/components/reusable/text/titlePage/styles";
import LettersLoader from "@/components/reusable/lettersLoader/LettersLoader";
import {useSelector} from "react-redux";
import titlePageAnimationScript from "@/components/reusable/text/animationTitlePage/animationScript";
import {ItemText} from "@/components/reusable/text/styles";

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
    <TitlePageWrapper data-mouse={'Scroll'}>
      <div ref={titlePageWrapperRef}>
        <LettersLoader rowLetters={rowLetters} textRef={textRef}/>

        <div ref={titlePageContentRef}>
          {!!subtitle && <TitlePageSubtitle>{subtitle}</TitlePageSubtitle>}
          {!!text && <ItemText>{text}</ItemText>}
        </div>
      </div>
    </TitlePageWrapper>
  );
};

export default AnimationTitlePage;