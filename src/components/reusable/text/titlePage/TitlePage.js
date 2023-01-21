import React from 'react';
import {
  TitlePageHeader,
  TitlePageSubtitle,
  TitlePageText,
  TitlePageWrapper
} from "@/components/reusable/text/titlePage/styles";

const TitlePage = ({title, subtitle, text}) => {
  return (
    <TitlePageWrapper>
      {!!title && <TitlePageHeader>{title}</TitlePageHeader>}
      {!!subtitle && <TitlePageSubtitle>{subtitle}</TitlePageSubtitle>}
      {!!text && <TitlePageText>{text}</TitlePageText>}
    </TitlePageWrapper>
  );
};

export default TitlePage;