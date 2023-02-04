import React from 'react';
import BlockTitle from "@/components/reusable/text/blockTitle/BlockTitle";
import dynamic from "next/dynamic";
const PartnersContent = dynamic(() => import('@/components/pages/homePage/items/partners/items/PartnersContent'), {ssr: false});
const Partners = () => {
  return (
    <div className='block-wrapper'>
      <BlockTitle>
        Partners
      </BlockTitle>
      <PartnersContent/>
    </div>
  );
};

export default Partners;