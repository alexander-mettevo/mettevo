import React from 'react';
import {BlockTitle} from "@/components/reusable/text/styles";
// import PartnersContent from "@/components/pages/homePage/items/partners/items/PartnersContent";
import dynamic from "next/dynamic";
const PartnersContent = dynamic(() => import('@/components/pages/homePage/items/partners/items/PartnersContent'), {ssr: false});
const Partners = () => {
  return (
    <div>
      <BlockTitle>
        Partners
      </BlockTitle>
      <PartnersContent/>
    </div>
  );
};

export default Partners;