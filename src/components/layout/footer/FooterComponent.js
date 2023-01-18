import React from 'react';
import {StyledContainer} from "@/styles/assets/StyledContainer";
import {Footer} from "@/components/layout/footer/styles";
import ThemeSwitcher from "@/components/layout/footer/themeSwitcher/ThemeSwitcher";
import FooterBottom from "@/components/layout/footer/footerBottom/FooterBottom";

const FooterComponent = ({setTheme}) => {
  return (
    <Footer>
      <StyledContainer>
        <ThemeSwitcher setTheme={setTheme}/>
        <FooterBottom/>
      </StyledContainer>
    </Footer>
  );
};

export default FooterComponent;