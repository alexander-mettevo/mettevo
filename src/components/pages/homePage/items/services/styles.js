import styled from "styled-components";
import {ItemTitle} from "@/components/reusable/text/styles";

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

  @media (max-width: 1440px) {
    justify-content: space-around;
  }

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
  
  @media (max-width: 500px) {
    display: block;
  }
`

export const ServicesItemTitle = styled(ItemTitle)`
  margin: 0 0 20px 0;
  text-align: center;
  `

export const ServicesItemContainer = styled.div`
  text-align: right;
  flex: 0 0 25%;
  
  @media (max-width: 1550px) {
    flex: 0 0 30%;
  }

  @media (max-width: 1440px) {
    flex: 0 0 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (max-width: 1024px) {
    flex: 0 0 45%;
    margin-bottom: 40px;
  }

  @media (max-width: 500px) {
    padding: 0 20px;
  }
`