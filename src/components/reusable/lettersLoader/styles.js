import styled from "styled-components";

export const LettersLoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  overflow: auto;
  background-color: #fff;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LettersLoaderContainer = styled.div`
  position: relative;
  min-width: 100%;
  min-height: 100%;
`

export const LettersLoaderText = styled.div`
  font-size: 15vw;
  font-weight: 900;
  position: absolute;
  overflow: hidden;
  height: 15vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  
  
  div {
    display: flex;
    flex-direction: column;
    text-align: center;

  }
  
  span {
    line-height: 16vw;
    display: block;
    letter-spacing: -1rem;
  }
  `