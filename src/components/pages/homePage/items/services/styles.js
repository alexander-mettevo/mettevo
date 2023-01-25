import styled from "styled-components";

export const ServicesWrapper = styled.div`
  margin-top: 240px;
  
  h2 {
    text-align: right;
    margin-bottom: 120px;
  }
  
  
  @media (max-width: 768px) {
    margin-top: 160px;
    
    h2 {
      text-align: center;
      margin-bottom: 40px;
    }
  }
  `

export const ServicesRow = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: block;
  }
`



export const ServicesItemTitle = styled.h5`
  font-size: 2.5rem;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  `


export const ServicesItemContainer = styled.div`
  text-align: right;
  flex: 0 0 30%;
`