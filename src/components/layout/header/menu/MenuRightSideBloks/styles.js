import styled from "styled-components";
import {UnderlineLink} from "@/styles/assets/links/styles";

export const TextTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 32px;
`
export const ActionBlockContainer = styled.div`
  min-height: 100%;
  position: relative;
`

export const ActionBlockWrapper = styled.div`
  display: flex;
  margin-bottom: 117px;

  @media(max-width: 1440px) {
    margin-bottom: 50px;
  }
  `

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  @media(max-width: 768px) {
    margin-top: 30px;
  }
`

export const ActionBlockList = styled.div`
  flex: 0 0 35%;  
  
  @media(max-width: 530px) {
    padding: 0 16px;
    flex: 0 0 100%;
    height: 100%;
  }
`

export const SimpleBlockTitle = styled.div`
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 19px;
  text-transform: lowercase;
  margin-bottom: 8px;
`

export const SimpleBlockText = styled.div`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 22px;
  color: ${({theme}) => theme.colors.grayText};
  margin-bottom: 24px;
`

export const SimpleBlockMoreLink = styled(UnderlineLink)`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 19px;
  text-transform: lowercase;
  margin-top: 12px;
`

export const SimpleBlockWrapper = styled.div`
  @media(max-width: 530px) {
    padding: 0 16px;
  }
  `