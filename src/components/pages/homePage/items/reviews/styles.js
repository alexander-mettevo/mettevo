import styled from "styled-components";

export const ReviewsContentWrapper = styled.div`
  background: ${({theme}) => theme.colors.footerForm};
  margin-top: 80px;
  padding: 56px;
  
  .swiper {
    z-index: 1;
 }
  
  .swiper-button-next, .swiper-button-prev {
    position: absolute;
    cursor: pointer;
    border-style: solid;
    border-width: 12px;
    bottom: 14px;
    z-index: 1;
  }
 

 
  .swiper-button-next {
    border-color: transparent transparent transparent ${({theme}) => theme.colors.primary};
    right: 0;
  }
  
  .swiper-button-prev{
   border-color: transparent ${({theme}) => theme.colors.primary} transparent   transparent;
   right: 50px;
  }
  
  .swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled{
      opacity: 0.5;
  }
  
  @media (max-width: 768px) {
   padding: 24px;
   margin-top: 34px;
  }
  
   @media (max-width: 400px) {
   padding: 5px;
  }
`

export const ReviewsItemRow = styled.div`
  display: grid;
  grid-template-columns: 24% 72%;
  grid-gap: 4%;
  grid-template-rows: 1fr;
  background: ${({theme}) => theme.colors.footerForm};
  
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr;
  }
  
  @media (max-width: 568px) {
   grid-template-rows: 1fr 3fr;
  }
  `

export const ReviewsItemLeft = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
  
  background: ${({theme}) => theme.isDark ? theme.colors.footerBackground : 'transparent'};
  padding: 3px;
  `

export const ReviewsItemRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ReviewsItemRowBio = styled.div`
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-style: italic;
  color: ${({theme}) => theme.colors.grayText};
  margin-top: 24px;
  
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`

export const ReviewsItemMainLogoWrapper = styled.div`
  height: 236px;
  
  @media (max-width: 992px) {
      height: 300px;
  }
  
  @media (max-width: 768px) {
      height: 100px;
      width: 80%;
      margin: 40px auto 0;
  }
  `

export const ReviewsItemSmallLogoWrapper = styled.div`
  height: 22px;
  flex: 0 0 30%;
  `

export const ReviewsItemDate = styled.div`
  color: ${({theme}) => theme.colors.grayText};
  
   @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`

export const ReviewsItemLeftBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  
  .star-svg {
    width: 22px;
    height: 22px;
  }
`