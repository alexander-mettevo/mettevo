import styled from "styled-components";
import {FormsTextInput} from "@/components/reusable/forms/styles";

export const FooterFormContainer = styled.div`
  background: #fff;
  padding: 60px;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);
  z-index: 10;
  width: 100%;
  @media(max-width: 1440px) {
    width: 95vw;
    padding: 30px;
  }

  @media(max-width: 992px) {
    padding: 16px;
  }
  `

export const FooterFormContent = styled.form`
  & span, input, label, div {
    color: ${({theme}) => theme.colors.primary};
    font-size: 1.5rem;
    
    
    
    @media(max-width: 1440px) {
      font-size: 1.125rem;
    }
    
    @media(max-width: 992px) {
      font-size: 1rem;
    }
  }
  
  label {
    display: inline-block;
    margin-bottom: 32px;
    
    @media(max-width: 1440px) {
      margin-bottom: 16px;
    }
  }
  
`

export const FooterFormInput = styled(FormsTextInput)`
  width: 538px;
  margin-bottom: 0;
  
  @media(max-width: 1440px) {
    width: 32vw;
    min-width: 150px;
  }

  @media(max-width: 992px) {
    font-size: 1rem;
    
  }
  `

export const FooterFormTextLabel = styled.label`
  @media (max-width: 992px) {
    width: 100%;
    display: flex !important;
    
    input {
      flex: 1;
    }
  }

  @media (max-width: 556px) {
    flex-wrap: wrap;
  }
`

export const FooterFormBlock = styled.div`
  margin-bottom: 32px;
  
  @media(max-width: 1440px) {
    margin-bottom: 16px;
  }
`

export const FooterFormCheckboxSpan = styled.span`
  @media(max-width: 440px) {
    display: block;
  }
`