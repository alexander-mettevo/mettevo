import React, {useRef} from 'react';
import {BurgerBtn, Header, HeaderContainer, NavigationMenu} from "./styles";
import Logo from "@/components/reusable/logo/Logo";
import DesktopNavigation from "@/components/layout/header/navigation/DesktopNavigation";
import {useSelector} from "react-redux";

const HeaderComponent = ({active, setActive}) => {
  const ref = useRef(null);
  const handleMenu = () => {
    ref.current.classList.toggle('open');
    setActive(!active)
  };

  return (
      <Header>
        <HeaderContainer>
          <div>
            <Logo/>
          </div>
          <DesktopNavigation/>
          <BurgerBtn ref={ref} onClick={handleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </BurgerBtn>
        </HeaderContainer>
      </Header>
  );
};

export default HeaderComponent;