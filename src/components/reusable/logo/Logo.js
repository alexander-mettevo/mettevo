import React from 'react';
import {LogoBottom, LogoTop, LogoWrapper} from "@/components/reusable/logo/styles";

const Logo = () => {
  return (
    <LogoWrapper href={'/'}>
      <LogoTop>METTEVO</LogoTop>
      <LogoBottom>DIGITAL AGENCY</LogoBottom>
    </LogoWrapper>
  );
};

export default Logo;