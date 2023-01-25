import styled from "styled-components";

export const ServicesMenuContainer = styled.div`
  display: flex;
  overflow: hidden;

  &:hover {
    div:first-child {
      transform: translateX(0);
    }

    div:last-child {
      transform: translateX(0);
    }
  }
`

export const ServicesMenuImage = styled.div`
  align-self: stretch;
  position: relative;
  flex: 0 0 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s ease;
  transform: translateX(-100%);
  padding-bottom: 80%;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: auto;
    width: 30%;
  }

  @media (max-width: 500px) {
    flex: 0 0 30%;
    transform: translateX(0);

    img {
      top: 20%;
      width: 100%;
    }
  }
`

export const ServicesMenuItems = styled.div`
  flex: 0 0 100%;
  text-align: left;
  transition: transform 0.5s ease;
  transform: translateX(-100%);

  @media (max-width: 500px) {
    flex: 0 0 70%;
    transform: translateX(0);
  }
`

export const ServicesMenuList = styled.ul`
  li {
    margin-bottom: 20px;
    margin-left: 20px;

    a {
      position: relative;
      display: inline-block;

      &:before {
        content: '';
        position: absolute;
        left: -20px;
        top: 50%;
        transform: translateY(-50%);
        width: 8px;
        height: 12px;
        background-image: url('/images/assets/rectangle.svg');
        transition: left 0.3s ease;
      }

      //make underline when hover

      &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -5px;
        width: 100%;
        height: 2px;
        background-color: #000;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease;
      }

      &:hover {
        &:after {
          transform: scaleX(1);
        }

        &:before {
          left: -15px;
        }
      }
    }
  }
`