import React from 'react';
import PageHeader from "@/components/pages/services/items/pageHeader/PageHeader";
import seoServices from "@/mocData/services/seoServices";
import ServiceInfo from "@/components/pages/services/items/serviseInfo/ServiceInfo";
import DifferentService from "@/components/pages/services/items/differentService/DifferentService";
import Changes from "@/components/pages/services/seo/index/items/changes/Changes";

const SeoService = () => {
  return (
    <>
      <PageHeader url={seoServices.url} title={seoServices.title}/>
      <ServiceInfo title={seoServices.title} info={seoServices.info}/>
      <DifferentService different={seoServices.different}/>
      <Changes/>
    </>
  );
};

export default SeoService;