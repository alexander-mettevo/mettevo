import styled from "styled-components";

export const BlockTitle = styled.h2`
  font-weight: 500;
  line-height: 68px;
  text-transform: lowercase;
  font-size: 3.75rem;
  text-align: ${({align}) => align || 'left'};
  
  @media(max-width: 1440px) {
    font-size: 5vw;
    line-height: 5.1vw;
  }
  
  @media(max-width: 768px) {
    font-size: 2rem;
    line-height: 40px;
  }
`

export const ItemTitle = styled.h5`
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 38px;
  margin: 0;

  @media (max-width: 1440px) {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  `

export const ItemText = styled.div`
  font-style: italic;
  font-size: 1.25rem;
  line-height: 32px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 24px;
  }
  `