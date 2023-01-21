import styled from "styled-components";

export const BlockTitle = styled.h2`
  font-weight: 500;
  line-height: 68px;
  text-transform: lowercase;
  font-size: 3.75rem;
  
  @media(max-width: 1440px) {
    font-size: 5vw;
    line-height: 50px;
  }
  
  @media(max-width: 768px) {
    font-size: 2rem;
    line-height: 40px;
  }
`