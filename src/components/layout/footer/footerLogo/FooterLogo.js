import React from 'react';
import Logo from "@/components/reusable/logo/Logo";
import ThemeSwitcher from "@/components/layout/footer/themeSwitcher/ThemeSwitcher";

const FooterLogo = () => {
  return (
    <div className={'footer-logo'}>
      <Logo/>
      <div className={'footer-logo__switcher'}>
        <ThemeSwitcher/>
      </div>
    </div>
  );
};

export default FooterLogo;