import styled from "styled-components";

export const FooterTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  
  @media(max-width: 768px) {
    flex-wrap: wrap;
    margin-top: 32px;
    
  }

  @media(max-width: 540px) {
    display: inline-flex;
    flex:0 0 48%;
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

export const FooterTopItemWrap = styled.div`
  @media(max-width: 768px) {
    flex: 0 0 30%;
    margin: 0 5px;
  }
  
  @media(max-width: 540px) {
    flex: 0 0 100%;
    margin-bottom: 80px;
  }
  
  //@media(max-width: 360px) {
  //  flex: 0 0 49.5%;
  //}
`
export const FooterTopItemTitle = styled.div`
  font-weight: 500;
  font-size: 1.125rem;
  margin-bottom: 24px;
  text-transform: uppercase;
  `

export const FooterTopItemList = styled.ul`
  line-height: 22px;
  
  li {
    margin-bottom: 20px;
  }
  `

export const FooterTopMobileWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  column-gap: 10px;
`