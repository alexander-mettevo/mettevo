import React, {useEffect, useRef, useState} from 'react';
import FooterComponent from "@/components/layout/footer/FooterComponent";
import HeaderComponent from "@/components/layout/header/HeaderComponent";
import MenuDesktop from "@/components/layout/header/menu/menuDesktop/MenuDesktop";
import MainComponent from "@/components/layout/main/Main";
import dynamic from "next/dynamic";
import MenuMobile from "@/components/layout/header/menu/menuMobile/MenuMobile";

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
<>
  <input
    ref={themeSwitcherRef}
    className='theme-handler__switch'
    id="theme-switch"
    type="checkbox"
    onChange={handleThemeSwitcher}
  />
  <div className={'wrapper'}>
    <HeaderComponent active={menuActive} setActive={setMenuActive}/>
    <MainComponent>
      <div className="__container">
        {children}
      </div>
    </MainComponent>
    <FooterComponent/>
    <MenuDesktop active={menuActive}/>
    <MenuMobile active={menuActive}/>
    <CursorAnimation/>
  </div>
</>


  );
};

export default MainLayout;