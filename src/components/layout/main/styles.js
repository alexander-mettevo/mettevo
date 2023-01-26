import styled from "styled-components";

export const MainWrapper = styled.main`
  width: 100%;
  flex: 0 1 100%;
  padding-top: 60px;
  padding-bottom: 400px;
  
`
export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  height: ${({height}) => height}px;
  bottom: 0;
  background-color: ${({theme}) => theme.colors.mainBackground};
  overflow: hidden;
  z-index: -1;
`;

export const Triangle = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 0 10px 20px;
  border-color: transparent transparent transparent rgba(203, 203, 203, 0.63);
`;
