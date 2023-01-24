import React, {useEffect, useState} from 'react';
import FooterComponent from "@/components/layout/footer/FooterComponent";
import HeaderComponent from "@/components/layout/header/HeaderComponent";
import {StyledContainer} from "@/styles/assets/StyledContainer";
import Menu from "@/components/layout/header/menu/Menu";
import {MainFlex} from "@/components/layout/styles";
import {lightTheme} from "@/styles/themes/lightTheme";
import {darkTheme} from "@/styles/themes/darkTheme";
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "@/styles/global";
import MainComponent from "@/components/layout/main/Main";
import CursorAnimation from "@/components/layout/assets/cursotAnimation/CursorAnimation";


const MainLayout = ({children}) => {
  const [menuActive, setMenuActive] = useState(false);
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme === 'dark') {
      setTheme(darkTheme);
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <HeaderComponent active={menuActive} setActive={setMenuActive}/>
      <MainFlex>
        <MainComponent>
          <StyledContainer>
            {children}
          </StyledContainer>
        </MainComponent>
        <FooterComponent setTheme={setTheme}/>
      </MainFlex>
      <Menu active={menuActive}/>
      <CursorAnimation/>
    </ThemeProvider>
  );
};

export default MainLayout;