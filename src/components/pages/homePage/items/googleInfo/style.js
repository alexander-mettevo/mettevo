import styled from "styled-components";

export const GoogleInfoWrapper = styled.div`
  display: flex;
  
  @media(max-width: 768px) {
    display: block;
  }
  `

export const GoogleInfoContainer = styled.div`
  flex: 0 0 1003px;
  
  @media(max-width: 1440px) {
    flex: 0 0 69.6vw;
  }

  @media(max-width: 1024px) {
    flex: 0 0 85vw;
  }
  
  `
export const GoogleInfoContent = styled.div`
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  
  @media(max-width: 1440px) {
    margin-top: 24px;
  }

  @media(max-width: 768px) {
    margin-top: 16px;
    display: block;
  }
  
`

export const GoogleInfoText = styled.div`
flex: 0 0 64%;  
  
  p:first-child {
    margin-bottom: 16px;
  }
`

export const GoogleInfoButton = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 40px;

  @media(max-width: 768px) {
    justify-content: center;
  }
  `