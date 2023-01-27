import styled from "styled-components";

export const StoriesWrapper = styled.div`
  position: relative;
  display: grid;
  margin-top: 160px;
  grid-template-columns: repeat(2, 1fr);
  text-transform: lowercase;
  font-size: 1.25rem;
`

export const StoriesTitle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`

export const StoriesItemImageWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  `

export const StoriesItemTitle = styled.span`
    
`

export const StoriesItemSubtitle = styled.span`
  color: #808080;
  `