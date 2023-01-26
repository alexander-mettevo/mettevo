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
  transition: transform 0.5s ease-in-out;
  
  &:hover {
    transform: scale(1.2) !important;
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