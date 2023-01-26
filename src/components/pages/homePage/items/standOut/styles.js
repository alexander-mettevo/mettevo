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
  display: flex;
  flex-wrap: wrap;

 // у каждого второго элемента padding-top: 100px;
  & > div:nth-child(2) {
    padding-top: 280px;
  }

  & > div {
    padding-bottom: 280px
  }
  
  @media (max-width: 1100px) {
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
  width: 50%;
  
  @media (max-width: 1100px) {
    width: 100%;
  }
  `