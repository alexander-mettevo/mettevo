import styled from "styled-components";
import {BlockTitle} from "@/components/reusable/text/styles";

export const AreYouReadyWrapper = styled.div`
  margin-top: 300px;
  max-width: 80%;
  
  &>div:nth-child(2) {
    margin-bottom: 20px;
  }
  
  @media(max-width: 1440px) {
    max-width: 90%;
  }

  @media(max-width: 992px) {
    margin-top: 160px;
    max-width: 100%;
  }
`

export const AreYouReadyTitle = styled(BlockTitle)`
  margin-bottom: 40px;

  @media(max-width: 992px) {
    margin-bottom: 24px;
  }

`