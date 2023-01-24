import styled from "styled-components";

export const TitlePageWrapper = styled.div`
  text-align: center;
  margin-bottom: 110px;
  padding-top: 40px;
  height: 100vh;

  @media(max-width: 768px) {
    margin-bottom: 120px;
  }
`

export const TitlePageHeader = styled.h1`
  font-weight: 900;
  font-size: 12.5rem;
  margin-bottom: 12px;
  text-transform: uppercase;
  
  @media(max-width: 1440px) {
    font-size: 12vw;
    margin-bottom: 8px;
  }

  @media(max-width: 768px) {
    font-size: 4.25rem;
    margin-bottom: 4px;
  }

  @media(max-width: 340px) {
    font-size: 3.25rem;
    margin-bottom: 4px;
  }
`

export const TitlePageSubtitle = styled.h2`
  line-height: 77px;
  text-transform: lowercase;
  font-size: 5rem;
  font-weight: 400;
  margin-bottom: 40px;

  @media(max-width: 1440px) {
    font-size: 7vw;
    line-height: 8vw;
    margin-bottom: 36px;
  }

  @media(max-width: 768px) {
    font-size: 1.625rem;
    margin-bottom: 32px;
    line-height: 25px;
    font-weight: 500;
  }
`

export const TitlePageText = styled.p`
  font-style: italic;
  line-height: 32px;
  font-size: 1.25rem;

  @media(max-width: 1440px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`