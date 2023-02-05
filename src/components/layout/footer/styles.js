import styled from "styled-components";
import Link from "next/link";

export const Footer = styled.footer`
  background-color: ${({theme}) => theme.colors.footerBackground};
  
  
  div, span, a, p {
    color: ${({theme}) => theme.colors.footerText};
  }
`

export const FooterContainer = styled.div`
  position: relative;
  padding-top: 474px;
  
  @media(max-width: 1440px) {
    padding-top: 330px;
  }
  `
export const FooterLink = styled(Link)`
  &:before {
    bottom: -5px;
    background-color: ${({theme}) => theme.colors.footerText};
  }

`