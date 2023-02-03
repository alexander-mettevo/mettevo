import styled from "styled-components";

export const MenuBtnsListWrapper = styled.ul`
  list-style-type: none;
  font-size: ${({desktopFS}) => desktopFS};

  @media (max-width: 1440px) {
    font-size: ${({noteFS, mobileFS}) => noteFS ? noteFS : mobileFS};
  }

  @media (max-width: 768px) {
    font-size: ${({mobileFS}) => mobileFS};
  }
  `

export const MenuBtnsListItem = styled.li`
  font-weight: ${({checked}) => checked ? 700 : 400};
  cursor: pointer;
  position: relative;
  transition: 0.3s;

   
  &:before {
    content: '';
    display: ${({checked}) => checked ? 'block' : 'none'};
    position: absolute;
    width: 0;
    height: 0;
    left: -24px;
    top: 50%;
    transform: translateY(-50%);
    border-style: solid;
    border-width: ${({rectangleSize}) => rectangleSize};
    border-color: transparent transparent transparent ${({theme}) => theme.colors.primary};
  }
 
  @media(max-width: 1440px) {
    &:before {
      left: -18px;
      border-width: ${({adaptiveRectangleSize}) => adaptiveRectangleSize};
    }
  }
  
  @media(max-width: 1024px) {
    &:before {
      left: -16px;
    }
  }
  
  @media(max-width: 768px) {
    &:before {
      left: -12px;
    }
  }
  
  
  span {
      position: relative;
  
      &::after {
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: ${({theme}) => theme.colors.primary};
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease;
    }
    
    &:hover::after {
      transform: scaleX(1);
    }
  }

  
`