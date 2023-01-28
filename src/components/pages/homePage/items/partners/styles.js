import Link from "next/link";
import styled from "styled-components";

export const PartnerLink = styled(Link)`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 50px;
  
  img {
    object-fit: contain;
    object-position: center;
  }
  
  @media(max-width: 992px) {
    height: 30px;
  }
`
export const PartnersSliderWrapper = styled.div`
  &>div {
    margin-top: 80px;
  }
`