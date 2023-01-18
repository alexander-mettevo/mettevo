import styled from "styled-components";

export const ButtonWrapper = styled.button`
  background: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.mainBackground};
  border: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: transparent;
    color: ${({theme}) => theme.colors.primary};
    border: 1px solid ${({theme}) => theme.colors.primary};
    
  }
`