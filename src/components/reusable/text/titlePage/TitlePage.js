import React from 'react';
import {TitlePageHeader, TitlePageSubtitle, TitlePageWrapper} from "@/components/reusable/text/titlePage/styles";
import {ItemText} from "@/components/reusable/text/styles";

const TitlePage = ({title, subtitle, text}) => {
  return (
    <TitlePageWrapper>
      {!!title && <TitlePageHeader>{title}</TitlePageHeader>}
      {!!subtitle && <TitlePageSubtitle>{subtitle}</TitlePageSubtitle>}
      {!!text && <ItemText>{text}</ItemText>}
    </TitlePageWrapper>
  );
};

export default TitlePage;