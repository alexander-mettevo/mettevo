import styled from "styled-components";
import Link from "next/link";

export const ActionsBlockFormWrapper = styled.form`
  label, span {
    font-size: 20px;
  }
  
  div:nth-child(2) {
    margin-bottom: 32px;
  }
  
  @media (max-width: 530px) {
    margin-top: 32px;
    
    label {
      display: block;
      width: 100%;
      overflow: hidden;
    }
  }
`

export const ActionsBlockFormInput = styled.input`
  @media (max-width: 530px) {
    margin-bottom: 5px;
  }
  
  @media (max-width: 445px) {
    width: 100%;
  }
  `

export const SocialRowsBlock = styled.div`
  display: flex;
  align-items: center;
  `

export const SocialRowsWrapper = styled.div`
  display: inline-flex;
  transform: translateY(15px);
  margin-left: 20px;
  
  a {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 16px;
    transition: all 0.3s ease;
    
    &:hover {
      transform: scale(1.1);
    }
  }
`

export const ViberLink = styled(Link)`
  background-image: ${({theme}) => theme.social.viber};
`

export const WhatsUpLink = styled(Link)`
  background-image: ${({theme}) => theme.social.whatsUp};
`

export const Telegram = styled(Link)`
  background-image: ${({theme}) => theme.social.telegram};
`


export const MenuRightSideArrowWrapper = styled.div`
  display: none;
  
  @media(max-width: 768px) {
    display: block;
    position: absolute;
    right: 25px;
    top: -20px;
  }
`
export const MenuRightSideArrowItem = styled.div`
  position: relative;
  display: block;
  //margin: 30px auto;
  width: 20px;
  height: 20px;
  border-top: 2px solid ${({theme}) => theme.colors.primary};
  border-left: 2px solid ${({theme}) => theme.colors.primary};
  transform: rotate(-45deg);
  
  &:after {
    content: "";
    display: block;
    width: 2px;
    height: 30px;
    background-color: ${({theme}) => theme.colors.primary};
    transform: rotate(-45deg) translate(10px, 4px);
    left: 0;
    top: 0;
  }
`

export const ActionsDesktopBlockItems = styled.div`
  @media(max-width: 530px) {
    display: none;
  }
`
export const ActionsMobileBlockWrapper = styled.div`
  display: none;
  
  @media(max-width: 530px) {
    display: block;
    width: 100%;
    position: absolute;
    z-index: 11;
    top: 5px;
    left: ${({mobileShowContent}) => mobileShowContent ? '0' : '-100vw'};
    background: ${({theme}) => theme.colors.mainBackground};
    transition: left 0.3s ease-in-out;
    padding: 0 16px 20px;
  }
`