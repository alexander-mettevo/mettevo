import styled from "styled-components";

export const ButtonWrapper = styled.button`
  background: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.mainBackground};
  transition: all 0.3s ease;
  border: 1px solid ${({theme}) => theme.colors.primary};
  font-size: 1.125rem;
  font-weight: 600;
  padding: 10.5px 32px;
  cursor: pointer;
  
  &:hover {
    background: transparent;
    color: ${({theme}) => theme.colors.primary};
    border: 1px solid ${({theme}) => theme.colors.primary};
    
  }
`