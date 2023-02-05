import styled from 'styled-components'

export const DoubleBounceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media(max-width: 480px) {
    
    & > div:nth-child(1) {
      & > div {
        width: 105px;
        height: 105px;
        
        line-height: 8px;
      }
    }
    
    & > div:nth-child(2) {
      & > div {
        width: 155px;
        height: 155px;
       
        line-height: 8px;
      }
    }
    font-size: 0.5rem;
  }
  `

export const DoubleBounceItem = styled.div`
  flex: 0 0 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  & > div {
    position: static;
    
    & > div {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 35px;

      @media(max-width: 480px) {
        padding: 15px;
      }
    }
  }
  
  & > span {
    margin-top: 24px;
    display: inline-block;
    width: 100%;
    text-align: center;
  }
  
  
 
`

export const DoubleBounceWordWrap = styled.div`
  width: 55%;
  line-height: 20px;
  font-size: 1rem;
  
  &:nth-child(even) {
    align-self: flex-end};
  }

  &:nth-child(odd) {
    align-self: flex-start;
  }

  @media(max-width: 650px) {
    font-size: 0.7rem;
    line-height: 15px;
  }

@media(max-width: 480px) {
  width: 100%;
  font-size: 0.5rem;
  line-height: 9px;
}
{
`
