import React from 'react';
import {LettersLoaderText} from "@/components/reusable/lettersLoader/styles";
import {TitlePageHeader} from "@/components/reusable/text/titlePage/styles";

const LettersLoader = ({textRef, rowLetters}) => (
    <LettersLoaderText ref={textRef}>
      {
        rowLetters.map((item, i) => (
          <TitlePageHeader key={i + 'a'}>
            {item.map((letter, j) => (
              <span key={j + 'b'}>
                  {letter}
                </span>
            ))}
          </TitlePageHeader>
        ))
      }
    </LettersLoaderText>
  )

export default LettersLoader;