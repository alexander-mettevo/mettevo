import Link from "next/link";
import styled from "styled-components";

export const PartnerLink = styled(Link)`
  display: inline-block;
  position: relative;
  width: 160px;
  height: 50px;
  
  img {
   object-fit: contain;
  }
`

export const PartnersSliderWrapper = styled.div`
  margin-top: 80px;
  `