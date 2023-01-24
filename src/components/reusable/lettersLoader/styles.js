import styled from "styled-components";

export const LettersLoaderText = styled.div`
  font-weight: 900;
  overflow: hidden;
  justify-content: center;
  display: flex;
  height: 225px;
  @media(max-width: 1440px) {
    height: 13vw;
  }
  
  @media(max-width: 768px) {
    height: 4.6rem;
  }
  
  div {
    display: flex;
    flex-direction: column;
    text-align: center;

  }
  
  span {
    display: block;
    letter-spacing: -1rem;
    
    @media(max-width: 768px) {
      letter-spacing: -8px;
    }
  }
  `