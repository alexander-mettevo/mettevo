import React from 'react';
import {MenuBottomRow} from "@/components/layout/header/menu/styles";
import {UnderlineLink} from "@/styles/assets/links/styles";

const MenuBottom = () => {
  return (
    <MenuBottomRow>
      <UnderlineLink href={'test'}>Facebook</UnderlineLink>
      <UnderlineLink href={'test'}>Instagram</UnderlineLink>
      <UnderlineLink href={'test'}>TikTok</UnderlineLink>
      <UnderlineLink href={'test'}>Linkedin</UnderlineLink>
    </MenuBottomRow>
  );
};

export default MenuBottom;