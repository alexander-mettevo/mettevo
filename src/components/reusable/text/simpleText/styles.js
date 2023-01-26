import styled from "styled-components";
import {ItemText, ItemTitle} from "@/components/reusable/text/styles";

export const SimpleTextWrapper = styled.div`
  display: inline-block;
`

export const SimpleTextTitle = styled(ItemTitle)`
  margin-bottom: 24px;
  
  @media (max-width: 992px) {
    margin-bottom: 16px;
  }
`

export const SimpleTextContent = styled(ItemText)`

`