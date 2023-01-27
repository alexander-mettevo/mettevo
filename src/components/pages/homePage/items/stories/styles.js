import styled from "styled-components";
import Link from "next/link";

export const StoriesWrapper = styled.div`
  position: relative;
  margin-top: 160px;
  text-transform: lowercase;
  font-size: 1.25rem;
`

export const StoriesGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 20px;
  
  & > div:nth-child(2) {
    align-self: end;
  }
  
  & > div:nth-child(3) {
    justify-self: end;
    align-self: center;
  }
  
  & > div:nth-child(4) {
    justify-self: end;
    align-self: end;
  }
  
  & > div:nth-child(5) {
    justify-self: start;
    align-self: center;
  }
  
    & > div:nth-child(6) {
    justify-self: start;
    align-self: center;
  }
 
`

export const StoriesTitle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
`

export const StoriesItemImageWrapper = styled(Link)`
  display: block;
  position: relative;
  overflow: hidden;
  width: ${({width}) => (width * 100) / 1440}vw;
  height: ${({height}) => (height * 100) / 1440}vw;
  
  img {
    transition: all 0.3s ease;
    object-fit: contain;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
 
  `

export const StoriesItemTitle = styled.span`
    
`

export const StoriesItemSubtitle = styled.span`
  color: #808080;
  `