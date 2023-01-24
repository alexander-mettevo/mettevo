import React from 'react';
import {StyledContainer} from "@/styles/assets/StyledContainer";
import {Footer, FooterContainer} from "@/components/layout/footer/styles";
import ThemeSwitcher from "@/components/layout/footer/themeSwitcher/ThemeSwitcher";
import FooterBottom from "@/components/layout/footer/footerBottom/FooterBottom";
import FooterTop from "@/components/layout/footer/footerTop/FooterTop";
import useWindowSize from "@/hooks/useWindowSize";
import FooterTopMobile from "@/components/layout/footer/footerTop/FooterTopMobile";
import FooterLogo from "@/components/layout/footer/footerLogo/FooterLogo";
import FooterForm from "@/components/layout/footer/footerForm/FooterForm";

const FooterComponent = ({setTheme}) => {
  const {width} = useWindowSize();

  return (
    <Footer>
      <FooterContainer>
        <FooterForm/>
        <FooterLogo setTheme={setTheme}/>
        {typeof window !== "undefined" && width > 540 ? <FooterTop/> : <FooterTopMobile/>}
        {typeof window !== "undefined" && width > 768 && <ThemeSwitcher setTheme={setTheme}/>}
        <FooterBottom/>
      </FooterContainer>
    </Footer>
  );
};

export default FooterComponent;