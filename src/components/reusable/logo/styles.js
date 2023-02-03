import styled from "styled-components";
import Link from "next/link";

export const LogoWrapper = styled(Link)`
  display: block;
  text-transform: uppercase;
  color: ${props => props.theme.colors.primary}
`

export const LogoTop = styled.div`
  font-weight: 900;
  font-size: 1.875rem;
  line-height: 2.5625rem;
`

export const LogoBottom = styled.div`
  letter-spacing: 0.1em;
  font-weight: 500;
  font-size: 0.8125rem;
  line-height: 1.125rem;
  text-align: right;
  `