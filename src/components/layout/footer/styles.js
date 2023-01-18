import styled from "styled-components";

export const Footer = styled.footer`
  background-color: ${({theme}) => theme.colors.footerBackground};
  
  * {
    color: ${({theme}) => theme.colors.footerText};
  }
`