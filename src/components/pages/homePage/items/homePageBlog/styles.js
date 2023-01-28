import styled from "styled-components";
import Link from "next/link";

export const HomePageBlogWrapper = styled.div`
  margin-top: 260px;

  @media (max-width: 768px) {
    margin-top: 160px;
  }
`


export const HomePageBlogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 80px;
  
  @media (max-width: 992px) {
    margin-bottom: 40px;
  }
 
 @media (max-width: 768px) {
  flex-direction: column;
  
  & > h2 {

  align-self: flex-start;
  }
  
  & > div {
    align-self: flex-end;
  }
 }
`

export const HomePageBlogRow = styled.div`
  display: flex;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    display: block;
  }
`

export const HomePageBlogItemWrapper = styled(Link)`
  flex: 0 0 29%;
  
  @media (max-width: 1440px) {
     flex: 0 0 31%;
  }
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const HomePageBlogItemImage = styled.div`
  position: relative;
  height: 550px;
  overflow: hidden;
  
  img {
    object-fit: contain;
    object-position: bottom;
    transition: transform 0.3s ease;
   
     &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
  }
  @media (max-width: 1230px) {
      height: 40vw;
  }
  
  @media (max-width: 768px) {
    width: 70%;
    align-self: flex-end;
    height: 55vw;
    
    img {
        object-fit: cover;
        
    }
  }
`

export const HomePageBlogItemTheme = styled.div`
  color: ${({theme}) => theme.colors.grayText};
  font-style: italic;
  text-transform: lowercase;
`

export const HomePageBlogItemTitle = styled.div`
  font-size: 1.375rem;
  line-height: 1.75rem;
  font-weight: 500;
  
  @media (max-width: 992px) {
  font-size: 1.25rem;
  font-weight: 400;
  }
`

export const HomePageBlogItemDate = styled.div`
  font-size: 1.125rem;
  line-height: 1.625rem;
  text-transform: lowercase;
  
  @media (max-width: 992px) {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
  }
  `