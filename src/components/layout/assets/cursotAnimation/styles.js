import styled from "styled-components";

export const CursorAnimationWrapper = styled.div`
  width: 0;
  height: 0;
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 50%;
  pointer-events: none;
  background: rgba(128, 128, 128, 0.1);
  backdrop-filter: blur(25px);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 1.125rem;
  transition: all 0.3s ease;
  color: ${({theme}) => theme.colors.primary};
  
  &.show {
    width: 90px;
    height: 90px;
    
  }
`