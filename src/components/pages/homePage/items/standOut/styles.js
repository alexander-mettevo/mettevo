import styled from "styled-components";

export const StandOutWrapper = styled.div`
  margin-top: 280px;
`

export const StandOutHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 80px;
`


export const StandOutContentRow = styled.div`
column-count: 2;


  & > div:nth-child(1) {
    padding-top: 0;
  }

  & > div {
     padding-top: 280px;
  }
  
  @media (max-width: 1100px) {
    column-count: 1;
    display: block;

    & > div {
      padding-top: 0;
    }

    & > div:nth-child(2) {
      padding-top: 0;
    }
    & > div {
      padding-bottom: 80px
    }
  }
  
  `

export const StandOutContentItemWrapper = styled.div`
  display: inline-block;
  
  @media (max-width: 1100px) {
    width: 100%;
  }
  `

export const StandOutEffectWrapper = styled.div`
  margin-top: 80px;
  
  @media(max-width: 768px) {
    margin-top: 24px;
  } 
`