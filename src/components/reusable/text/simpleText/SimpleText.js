import React, {useEffect, useRef} from 'react';
import {SimpleTextContent, SimpleTextTitle, SimpleTextWrapper} from "@/components/reusable/text/simpleText/styles";
import showFromBottom from "@/components/reusable/animations/showFromBottom";

const SimpleText = ({title, text}) => {
  const ref = useRef(null);

  useEffect(() => {showFromBottom(ref)}, [])

  return (
    <SimpleTextWrapper ref={ref}>
      <SimpleTextTitle>
        {title}
      </SimpleTextTitle>
      <SimpleTextContent>
        {text}
      </SimpleTextContent>
    </SimpleTextWrapper>
  );
};

export default SimpleText;