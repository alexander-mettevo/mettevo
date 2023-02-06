import React from 'react';

const LettersLoader = ({textRef, rowLetters}) => (
    <div className={'title-page__loader'} ref={textRef}>
      {
        rowLetters.map((item, i) => (
          <h1 className={'title-page__header'} key={i + 'a'}>
            {item.map((letter, j) => (
              <span key={j + 'b'}>
                  {letter}
                </span>
            ))}
          </h1>
        ))
      }
    </div>
  )

export default LettersLoader;