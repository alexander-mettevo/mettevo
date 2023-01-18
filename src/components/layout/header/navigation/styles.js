import styled from "styled-components";
import {UnderlineLink} from "@/styles/assets/links/styles";

export const NavigationMenu = styled.nav`
  display: flex;

  @media (max-width: 1024px) {
    display: none;
  }
`

export const NavigationMenuLink = styled(UnderlineLink)`
  margin: 0 10px;
  font-weight: 500;
  line-height: 24px;
  text-transform: uppercase;
  white-space: nowrap;
  
  @media (max-width: 1024px) {
    flex: 0 0 20%;
  }
`

export const MobileNavigationWrapper = styled.div`
  display: none;

  @media (max-width: 1024px) {
    margin: 10px 6px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 5px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
  `