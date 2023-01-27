import styled from "styled-components";


export const BounceWrapper = styled.div`
  position: absolute;
  width: ${({size}) => size};
  height: ${({size}) => size};
  border-radius: 50%;
  background-color: ${({color}) => color};
  top: ${({top}) => top};
  left: ${({left}) => left};
  color: ${({color}) => color === '#101010' ? '#fff' : '#101010'};
  
  @media(max-width: 650px) {
    width: ${({mobileSize, size}) => mobileSize ? mobileSize : size};
    height: ${({mobileSize, size}) => mobileSize ? mobileSize : size};
  }
`
export const BounceItem = styled.div`
  font-weight: 500;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 1.125rem;
  padding: 10px;
  text-align: center;
`