import React from 'react';
import {
  FooterBottomLinks,
  FooterBottomPolicy,
  FooterBottomWrapper
} from "@/components/layout/footer/footerBottom/styles";
import Link from "next/link";

const FooterBottom = () => {
  return (
    <FooterBottomWrapper>
      <FooterBottomPolicy>
        <span>© Mettevo 2020 - 2022 | All rights reserved.</span>
        <Link href='/policy'>Privacy Policy</Link>
      </FooterBottomPolicy>

      <FooterBottomLinks>
        <span>FolLow us:</span>
        <Link href='/'>Facebook</Link>
        <Link href='/'>Instagram</Link>
        <Link href='/'>TikTok</Link>
        <Link href='/'>Linkedin</Link>
      </FooterBottomLinks>
    </FooterBottomWrapper>
  );
};

export default FooterBottom;