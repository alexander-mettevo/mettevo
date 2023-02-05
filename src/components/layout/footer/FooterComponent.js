import React from 'react';
import ThemeSwitcher from "@/components/layout/footer/themeSwitcher/ThemeSwitcher";
import FooterBottom from "@/components/layout/footer/footerBottom/FooterBottom";
import FooterTop from "@/components/layout/footer/footerTop/FooterTop";
import useWindowSize from "@/hooks/useWindowSize";
import FooterTopMobile from "@/components/layout/footer/footerTop/FooterTopMobile";
import FooterLogo from "@/components/layout/footer/footerLogo/FooterLogo";
import FooterForm from "@/components/layout/footer/footerForm/FooterForm";

const FooterComponent = () => {
  const {width} = useWindowSize();

  return (
    <footer className='footer'>
      <div className="footer__container">
        <FooterForm/>
        <FooterLogo/>
        {typeof window !== "undefined" && width > 540 ? <FooterTop/> : <FooterTopMobile/>}
        {typeof window !== "undefined" && width > 768 && <ThemeSwitcher/>}
        <FooterBottom/>
      </div>
    </footer>
  );
};

export default FooterComponent;