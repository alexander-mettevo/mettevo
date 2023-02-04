import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  background: ${({theme}) => theme.colors.mainBackground};
  position: fixed;
  z-index: 50;
  display: flex;
  align-items: center;
  `

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;

  `



export const BurgerBtn = styled.div`
  width: 36px;
  height: 2px;
  position: relative;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;
  padding-bottom: 22px;
  
  & span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: ${({theme}) => theme.colors.primary};
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
  }

  & span:nth-child(1) {
    top: 0;
  }

  & span:nth-child(2) {
    top: 9px;
  }

  & span:nth-child(3) {
    top: 18px;
  }

  &.open span:nth-child(1) {
    top: 10px;
    transform: rotate(135deg);
  }

  &.open span:nth-child(2) {
    opacity: 0;
    left: -60px;
  }

  &.open span:nth-child(3) {
    top: 10px;
    transform: rotate(-135deg);
  }
  `
