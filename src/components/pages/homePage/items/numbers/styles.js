import styled from "styled-components";

export const NumbersHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;
  
  @media(max-width: 1100px) {
    & div:last-child {
      margin-right: 80px;
    }
  }

  @media(max-width: 768px) {
    & div:last-child {
      margin-right: 10px;
      white-space: nowrap;
    }
  }
`

export const NumbersRow = styled.div`
  display: flex;
  justify-content: flex-end;

  @media(max-width: 992px) {
    flex-wrap: wrap;
  }
  
`

export const NumbersItemWrapper = styled.div`
  text-align: center;
  flex: 0 0 19%;
  
  @media(max-width: 1440px) {
    flex: 0 0 23%;
  }

  @media(max-width: 1100px) {
    flex: 1 1 25%;
  }
  @media(max-width: 992px) {
    margin-bottom: 60px;
    flex: 1 1 50%;
  }
`

export const NumbersItemValue = styled.div`
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 4px;
`

export const NumbersItemText = styled.div`
  font-size: 1.125rem;
  
`