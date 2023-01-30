import React from 'react';
import BlockTitle from "@/components/reusable/text/blockTitle/BlockTitle";
import dynamic from "next/dynamic";
import {MainBlockWrapper} from "@/components/reusable/bloks/styles";
const PartnersContent = dynamic(() => import('@/components/pages/homePage/items/partners/items/PartnersContent'), {ssr: false});
const Partners = () => {
  return (
    <MainBlockWrapper>
      <BlockTitle>
        Partners
      </BlockTitle>
      <PartnersContent/>
    </MainBlockWrapper>
  );
};

export default Partners;