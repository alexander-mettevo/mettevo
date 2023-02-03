import React from 'react';
import Logo from "@/components/reusable/logo/Logo";
import ThemeSwitcher from "@/components/layout/footer/themeSwitcher/ThemeSwitcher";
import {FooterLogoThemeSwitcher, FooterLogoWrapper} from "@/components/layout/footer/footerLogo/styles";

const FooterLogo = ({setTheme}) => {
  return (
    <FooterLogoWrapper>
      <Logo/>
      <FooterLogoThemeSwitcher>
        <ThemeSwitcher setTheme={setTheme}/>
      </FooterLogoThemeSwitcher>
    </FooterLogoWrapper>
  );
};

export default FooterLogo;