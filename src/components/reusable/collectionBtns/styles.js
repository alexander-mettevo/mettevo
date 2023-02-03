import styled from "styled-components";
import Link from "next/link";


export const CollectionBtnsWrapper = styled.div`
  margin-top: 305px;
  
  @media (max-width: 1440px) {
    margin-top: 160px;
  }

  @media (max-width: 440px) {
    margin-top: 60px;
  }
  `

export const CollectionBtnsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`



export const CollectionBtnsItemWrapper = styled(Link)`
  flex: 0 0 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 120px;
  
  @media (max-width: 880px) {
    flex: 0 0 33.333%;
    margin-top: 80px;
  }

  @media (max-width: 568px) {
    flex: 0 0 50%;
    margin-top: 60px;
  }
`

export const CollectionBtnsImageWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 880px) {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 400px) {
    width: 50px;
    height: 50px;
  }
  `
export const CollectionBtnsTitle = styled.div`
  font-size: 1.625rem;

  @media (max-width: 400px) {
    font-size: 1.125rem;
  }
`

