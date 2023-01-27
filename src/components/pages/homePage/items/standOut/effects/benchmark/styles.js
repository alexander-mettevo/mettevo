import styled from "styled-components";
import {StandOutEffectWrapper} from "@/components/pages/homePage/items/standOut/styles";

export const BenchmarkWrapper = styled(StandOutEffectWrapper)`
  
`

export const BenchmarkArrow = styled.div`
  width: 100%;
  height: 5px;
  background-color: ${({theme}) => theme.colors.primary};
  transform: rotate(-10deg) translateY(20px) translateX(-5px);
  position: relative;
  
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    right: -8px;
    top: 50%;
    transform: translateY(-50%);
    border-style: solid;
    border-width: 14px 0 14px 16px;
    border-color: transparent transparent transparent ${({theme}) => theme.colors.primary}
  }
  
  
  @media (max-width: 480px) {
    transform: rotate(-10deg) translateY(-5px) translateX(-5px);
  }
`

export const BenchmarkWordWrapper = styled.div`
& span:nth-child(4) {
  margin-right: 16px;
}
`

export const BenchmarkWord = styled.span`
  text-transform: uppercase;
  font-weight: 600;
  font-family: Helvetica,sans-serif;
  font-size: ${({index}) => index === 0 ? '8.75rem' : 8.75 + (index * 1.25) + 'rem'};
  line-height: ${({index}) => index === 0 ? '8.75rem' : 8.75 + (index * 1.25) + 'rem'};
  
  @media (max-width: 1440px) {
    font-size: ${({index}) => index === 0 ? '9vw' : 9 + (index * 1.5) + 'vw'};
    line-height: ${({index}) => index === 0 ? '9vw' : 9 + (index * 1.5) + 'vw'};
  }

  @media (max-width: 1100px) {
    font-size: ${({index}) => index === 0 ? '15vw' : 15 + (index * 4) + 'vw'};
    line-height: ${({index}) => index === 0 ? '15vw' : 15 + (index * 4) + 'vw'};
  }

  @media (max-width: 768px) {
    font-size: ${({index}) => index === 0 ? '13vw' : 13 + (index * 4) + 'vw'};
    line-height: ${({index}) => index === 0 ? '13vw' : 13 + (index * 4) + 'vw'};
  }
`
