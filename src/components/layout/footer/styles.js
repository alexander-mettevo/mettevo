import styled from "styled-components";
import {UnderlineLink} from "@/styles/assets/links/styles";
import {StyledContainer} from "@/styles/assets/StyledContainer";

export const Footer = styled.footer`
  background-color: ${({theme}) => theme.colors.footerBackground};
  
  
  * {
    color: ${({theme}) => theme.colors.footerText};
  }
`

export const FooterContainer = styled(StyledContainer)`
  position: relative;
  padding-top: 474px;
  
  @media(max-width: 1440px) {
    padding-top: 330px;
  }
  `
export const FooterLink = styled(UnderlineLink)`
  &:before {
    bottom: -5px;
    background-color: ${({theme}) => theme.colors.footerText};
  }

`