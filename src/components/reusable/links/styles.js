import styled from "styled-components";
import Link from "next/link";

export const ArrowLinkWrapper = styled.div`
  display: inline-block;
  position: relative;
  
  &:hover {
    div {
      span {
        width: 75px;
      }
    }
  }

  @media(max-width: 1440px) {
    margin-right: ${({isMarginRight}) => isMarginRight ? '75px' : '0'};
  }
`

export const ArrowLinkItemsWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: calc(100% + 10px);
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  `

export const ArrowLinkLine = styled.span`
  width: 0;
  height: 2px;
  background-color: #000;
  display: inline-block;
  transform-origin: left;
  transition: width 0.3s ease-in-out;
`


export const ArrowLinkRectangle = styled.span`
  display: inline-block;
  height: 12px;
  width: 8px;
  background-image: url('/images/assets/rectangle.svg');
  background-repeat: no-repeat;
  background-size: contain;
  transform: scaleX(1) translateX(-1px);
  transform-origin: left;
  transition: transform 0.3s ease-in-out;
  `

export const ArrowLinkItem = styled(Link)`
  font-size: 1.25rem;
  font-weight: 500;
  position: relative;

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    right: -100%;
    width: 100%;
    height: 2px;
    background: #000;
    transform: scaleX(-1);
    transform-origin: left;
    transition: transform 0.3s ease-in-out;
  }

  &:hover::after {
    transform: scaleX(0);
  }
  
`