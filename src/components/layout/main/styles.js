import styled from "styled-components";

export const MainWrapper = styled.main`
  width: 100%;
  flex: 0 1 500vh;
    background-color: ${({theme}) => theme.colors.mainBackground};
  `
export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 500vh;
  bottom: 0;
  background-color: white;
  overflow: hidden;
`;

export const Triangle = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 0 10px 20px;
  border-color: transparent transparent transparent rgba(203, 203, 203, 0.63);
`;
