import styled from "styled-components";

export const GraphicWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  
  @media (max-width: 1440px) {
    transform: scale(0.8);
  }
  
  @media (max-width: 568px) {
    transform: translateX(-60px) scale(0.6);
    margin-top: -80px;
    margin-bottom: -80px;
  }
  @media (max-width: 428px) {
    transform: translateX(-70px) scale(0.5);
  }
`

export const GraphicFooterRow = styled.div`
  display: flex;
  
  & > div {
    position: relative;
    margin-right: 30px;
    padding-left: 38px;
  }
`

export const BounceGraphicsContentWrapper = styled.div`
  position: relative;
  height: 402px;
  width: 582px;
  margin-top: 80px;
  
  @media (max-width: 1440px) {
    margin-top: 60px;
  }
  
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`

export const BounceGraphicsFooterLeftSideText = styled.div`
  position: absolute;
  top: 50%;
  left: -120px;
  transform: rotate(-90deg);
  `

export const BounceGraphicsFooterBottomText = styled.div`
  span:nth-child(1) {
    margin-right: 107px;
  }
  
  span:nth-child(2) {
    margin-right: 254px;
  }
`

export const BounceGraphicsCircleWrapper = styled.div`
  position: relative;
  height: 90%;
  `