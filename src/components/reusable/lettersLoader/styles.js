import styled from "styled-components";

export const LettersLoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #fff;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LettersLoaderText = styled.div`
  font-size: 5rem;
  font-weight: 700;
  position: relative;
  
  div {
    position: absolute;
    overflow: hidden;
    display: flex;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  `