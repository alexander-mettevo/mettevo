import styled from "styled-components";

export const FormsTextInput = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid #b9b9b9;
  margin: 0 10px 32px;
  font-size: 14px;
  width: 30%;
  min-width: 200px;
  color: ${({theme}) => theme.colors.primary};
  `

export const CustomCheckboxWrapper = styled.label`
  background: ${({theme, checked}) => !checked ? theme.colors.primary : theme.colors.footerText};
  color: ${({theme, checked}) => !checked ? theme.colors.footerText  : theme.colors.primary} !important;
  font-size: 1.125rem;
  font-weight: 700;
  padding: 12px 28px;
  margin: 0 6px;
  cursor: pointer;
  border: 1px solid ${({theme}) => theme.colors.primary};
  white-space: nowrap;
  
  @media(max-width: 1440px) {
    font-size: 1rem;
    padding: 8px 24px;
  }
  
  @media(max-width: 992px) {
    padding: 8px 16px;
  }
  
  input {
    width: 0;
    height: 0;
  }
`