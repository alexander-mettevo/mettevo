import styled from "styled-components";


export const FooterBottomWrapper = styled.div`
  display: flex;  
  justify-content: space-between;
  border-top: 1px solid #303030;
  
  
  div {
    padding: 32px 0;
  }
  
  @media (max-width: 1100px) {
    flex-wrap: wrap;
    div {
      border-top: 1px solid #303030;
      flex: 0 0 100%;
    }
    
    div:first-child {
      order: 2;
    }
    
    div:last-child {
      order: 1;
    }
  }
`

export const FooterBottomLinks = styled.div`
  font-weight: 500;
  line-height: 24px;
  
  span, a {
    margin: 0 30px;
  }
  
  a:last-child {
    margin-right: 0;
  }

  @media (max-width: 1100px) {
    text-align: center;
  }
  
  @media (max-width: 768px) {
    font-size: 0.875rem;
    font-weight: 400;
     a {
      margin: 0 15px;
    }
    
    span {
      display: none;
    }
  }

  @media (max-width: 470px) {
    span, a {
      margin: 0 5px;
    }
  }
  `

export const FooterBottomPolicy = styled.div`
  a {
    margin-left: 12px;
  }
  
  @media (max-width: 768px) {
    text-align: center;
    font-size: 0.625rem;
  }
  `