import styled from "styled-components";

export const LettersLoaderText = styled.div`
  font-weight: 900;
  overflow: hidden;
  justify-content: center;
  display: flex;
  
  
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