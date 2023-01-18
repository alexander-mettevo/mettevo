import React from 'react';
import {
  SocialRowsWrapper, Telegram,
  ViberLink,
  WhatsUpLink
} from "@/components/layout/header/menu/MenuRightSideBloks/Items/styles";

const SocialRows = () => {
  return (
    <SocialRowsWrapper>
      <ViberLink href={'test'}/>
      <WhatsUpLink href={'test'}/>
      <Telegram href={'test'}/>
    </SocialRowsWrapper>
  );
};

export default SocialRows;