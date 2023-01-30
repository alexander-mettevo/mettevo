import styled from "styled-components";
import {StandOutEffectWrapper} from "@/components/pages/homePage/items/standOut/styles";

export const BenchmarkWrapper = styled(StandOutEffectWrapper)`
  
`

export const BenchmarkArrow = styled.div`
  width: 100%;
  height: 5px;
  background-color: ${({theme}) => theme.colors.primary};
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
  @media (max-width: 768px) {
    margin-top: 40px;
    }
    
      @media (max-width: 468px) {
    margin-top: 60px;
    }

& span:nth-child(4) {
  margin-right: 16px;
}
`

export const BenchmarkWord = styled.span`
display: inline-block;

  text-transform: uppercase;
  font-weight: 600;
  font-family: Helvetica,sans-serif;
  font-size: ${({index}) => index === 0 ? '7.55rem' : 7.75 + (index * 1.25) + 'rem'};
  line-height: ${({index}) => index === 0 ? '7.55rem' : 7.75 + (index * 1.25) + 'rem'};
  
  @media (max-width: 1440px) {
    font-size: ${({index}) => index === 0 ? '8vw' : 8 + (index * 1.5) + 'vw'};
    line-height: ${({index}) => index === 0 ? '8vw' : 8 + (index * 1.5) + 'vw'};
  }

  @media (max-width: 1100px) {
    font-size: ${({index}) => index === 0 ? '12vw' : 12 + (index * 4) + 'vw'};
    line-height: ${({index}) => index === 0 ? '12vw' : 12 + (index * 4) + 'vw'};
  }

  @media (max-width: 768px) {
    font-size: ${({index}) => index === 0 ? '11vw' : 11 + (index * 4) + 'vw'};
    line-height: ${({index}) => index === 0 ? '11vw' : 11 + (index * 4) + 'vw'};

  }
`
