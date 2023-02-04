import styled from "styled-components";

export const CheckBoxContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const CheckBoxWrapper = styled.div`
  position: relative;
`

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: transparent;
  border: 1px solid #FFFFFF;
  cursor: pointer;
  
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    transition: 0.2s;
  }
`

export const CheckBox = styled.input`
  opacity: 1;
  z-index: 100000;
  position: fixed;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  // &:checked + ${CheckBoxLabel} {
  //   background: transparent;
  //   border: 1px solid #000;
  //
  //  
  //   &::after {
  //     content: "";
  //     display: block;
  //     border-radius: 50%;
  //     width: 18px;
  //     height: 18px;
  //     margin-left: 21px;
  //     transition: 0.2s;
  //     background: #000;
  //   }
  //  
  //   &:before {
  //     content: "";
  //     display: block;
  //     border-radius: 50%;
  //     width: 25px;
  //     height: 18px;
  //     margin-left: 21px;
  //     transition: 0.2s;
  //     transform: translateX(-50%) translateY(3px);
  //     background: #F9F9F9;
  //     position: absolute;
  //     z-index: 10;
  //   }
  // }
`