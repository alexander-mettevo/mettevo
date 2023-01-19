import styled from "styled-components";

export const FooterDropdownContent = styled.ul`
  max-height: ${({showContent}) => showContent ? '100%' : '0'};
  overflow: hidden;
  transform: ${({showContent}) => showContent ? 'scaleY(1)' : 'scaleY(0)'};
  transform-origin: top;
  transition: transform 0.3s ease, max-height 0.3s ease;
  font-size: 0.875rem;
  margin-top: 20px;
  margin-bottom: 8px;
`

export const FooterDropdownTitle = styled.div`
  cursor: pointer;
  position: relative;
  margin-bottom: ${({showContent}) => showContent ? '20px' : '0'};
  
  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%) rotate(${({showContent}) => showContent ? '180deg' : '0'});
    border-style: solid;
    border-width: 0 6px 6px 6px;
    border-color: transparent transparent ${({theme}) => theme.colors.footerText} transparent;
    transition: transform 0.3s ease;
  }
  
  
  `