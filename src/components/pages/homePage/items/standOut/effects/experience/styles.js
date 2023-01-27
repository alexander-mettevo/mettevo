import styled from "styled-components";
import {StandOutEffectWrapper} from "@/components/pages/homePage/items/standOut/styles";

export const ExperienceWrapper = styled(StandOutEffectWrapper)`
  position: relative;

  span:nth-child(1) {
    left: 0;
    top: 8.333%;
  }
  span:nth-child(2) {
    left: 30%;
    top: 23.333%;
  }
  span:nth-child(3) {
    right: 10%;
    top: 0;
  }
  span:nth-child(4) {
    left: 0;
    top: 45%;
  }
  span:nth-child(5) {
    left: 40%;
    top: 72%;
  }
  span:nth-child(6) {
    right: 0;
    top: 55%;
  }

`

export const ExperienceBackground = styled.div`
  text-align: center;
  color: #EEEEEE;
  font-weight: 900;
  
  
  & > div:first-child {
    font-size: 7.31rem;
    line-height: 7.125rem;
  }
  & > div:last-child {
    font-size: 12.5rem;
    line-height: 12.25rem;
  }

  @media(max-width: 1440px) {
    & > div:first-child {
      font-size: 6.31rem;
      line-height: 6.125rem;
    }
    & > div:last-child {
      font-size: 11.5rem;
      line-height: 11.25rem;
    }
  }

  @media(max-width: 1100px) {
    & > div:first-child {
      font-size: 8.31rem;
      line-height: 8.125rem;
    }
    & > div:last-child {
      font-size: 13.5rem;
      line-height: 13.25rem;
    }
  }

  @media(max-width: 768px) {
    & > div:first-child {
      font-size: 6rem;
      line-height: 6rem;
    }
    & > div:last-child {
      font-size: 11rem;
      line-height: 11rem;
    }
  }

  @media(max-width: 568px) {
    & > div:first-child {
      font-size: 18.5vw;
      line-height: 18.5vw;
    }
    & > div:last-child {
      font-size: 24vw;
      line-height: 24vw;
    }
  }
`

export const ExperienceWord = styled.span`
  font-weight: 700;
  font-size: 1.68rem;
  text-transform: uppercase;
  position: absolute;

  @media(max-width: 1100px) {
    font-size: 2rem;
  }

  @media(max-width: 768px) {
    font-size: 1.3rem;
  }

  @media(max-width: 568px) {
    font-size: 4vw;
  }
`


export const ExperienceContainer = styled.div`
  position: relative;

  height: 100%;
  
 
  
  
  //min-width: 1100px
//  @media( max-width: 1440px) {
//    font-size: 1.5rem;
//    
//    div:nth-child(1) {
//      left: 20px;
//      top: 5px;
//    }
//    div:nth-child(2) {
//      left: 200px;
//      top: 34px;
//    }
//    div:nth-child(3) {
//      right: 80px;
//      top: 0;
//    }
//    div:nth-child(4) {
//      left: 20px;
//      top: 120px;
//    }
//    div:nth-child(5) {
//      left: 183px;
//      top: 180px;
//    }
//    div:nth-child(6) {
//      right: 50px;
//      top: 144px;
//    }
//  }
`
