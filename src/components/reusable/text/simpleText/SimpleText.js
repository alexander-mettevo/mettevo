import React from 'react';
import {SimpleTextContent, SimpleTextTitle, SimpleTextWrapper} from "@/components/reusable/text/simpleText/styles";

const SimpleText = ({title, text}) => {
  return (
    <SimpleTextWrapper>
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