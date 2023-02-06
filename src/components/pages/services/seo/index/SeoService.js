import React from 'react';
import PageHeader from "@/components/pages/services/items/pageHeader/PageHeader";
import seoServices from "@/mocData/services/seoServices";
import ServiceInfo from "@/components/pages/services/items/serviseInfo/ServiceInfo";

const SeoService = () => {
  return (
    <>
      <PageHeader url={seoServices.url} title={seoServices.title}/>
      <ServiceInfo title={seoServices.title} info={seoServices.info}/>
    </>
  );
};

export default SeoService;