import styled from "styled-components";
import {StyledContainer} from "@/styles/assets/StyledContainer";

export const MenuWrapper = styled.div`
  position: fixed;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  padding-bottom: 50px;
  top: 55px;
  left: 0;
  transform: ${({active}) => active ? 'translateY(0)' : 'translateY(-100%)'};
  transition: transform 0.3s ease-in-out;
  background: ${({theme}) => theme.colors.mainBackground};
  z-index: 11;
  
  
  `

export const MenuContent = styled(StyledContainer)`
  width: 100%;
  height: 100%;
  overflow: ${({active}) => active ? 'auto' : 'hidden'};
  overflow-x: hidden;
  @media(max-width: 768px) {
    padding: 0;
  }
`

export const MenuContentRow = styled.div`
  display: flex;
  
  @media (max-width: 768px) {
    display: block;
    position: relative;
  }
`
export const MenuLeftSideList = styled.div`
  flex: 0 0 33.333%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 16px;
  }
  
`

export const MenuRightSideWrapper = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    position: absolute;
    z-index: 1;
    top: 0;
    left: ${({showContent}) => showContent ? '0' : '-100vw'};
    background: ${({theme}) => theme.colors.mainBackground};
    transition: left 0.3s ease-in-out;
    padding: 0 16px;
  }
  
  @media (max-width: 530px) {
    padding: 0;
    margin-top: 5px;
    height: 100%;
  }
`

export const MenuRightSideContainer = styled.div`
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
  }
`

export const MenuBottomRow = styled.div`
  text-align: center;
  width: 100%;
  margin: 80px 0 60px;
  
  @media (max-width: 768px) {
    margin: 40px 0 20px;
  }
  
  a {
    margin-left:  80px;
    
    @media (max-width: 768px) {
      margin: 0 10px;
    }
  }
`