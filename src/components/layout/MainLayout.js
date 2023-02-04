import React, {useEffect, useRef, useState} from 'react';
import FooterComponent from "@/components/layout/footer/FooterComponent";
import HeaderComponent from "@/components/layout/header/HeaderComponent";
import Menu from "@/components/layout/header/menu/Menu";
import {lightTheme} from "@/styles/themes/lightTheme";
import {darkTheme} from "@/styles/themes/darkTheme";
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "@/styles/global";
import MainComponent from "@/components/layout/main/Main";
import dynamic from "next/dynamic";

const CursorAnimation = dynamic(() =>
  import('@/components/layout/assets/cursotAnimation/CursorAnimation'), {
  ssr: false
});


const MainLayout = ({children}) => {
  const [menuActive, setMenuActive] = useState(false);
  const themeSwitcherRef = useRef(null);

  useEffect(() => {
    menuActive ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';
  }, [menuActive])

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    themeSwitcherRef.current.checked = theme === 'dark';
  }, [])

  const handleThemeSwitcher = (e) => {
    if (e.target.checked) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  }

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles/>
      <input
        ref={themeSwitcherRef}
        className='theme-handler__switch'
        id="theme-switch"
        type="checkbox"
        onChange={handleThemeSwitcher}
      />
        <div className="wrapper">
          <HeaderComponent active={menuActive} setActive={setMenuActive}/>
          <MainComponent>
            <div className="__container">
              {children}
            </div>
          </MainComponent>
          <FooterComponent/>
          <Menu active={menuActive}/>
          <CursorAnimation/>
        </div>
    </ThemeProvider>
  );
};

export default MainLayout;