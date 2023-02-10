import React from 'react';
import PageHeader from "@/components/pages/services/items/pageHeader/PageHeader";
import seoServices from "@/mocData/services/seoServices";
import ServiceInfo from "@/components/pages/services/items/serviseInfo/ServiceInfo";
import DifferentService from "@/components/pages/services/items/differentService/DifferentService";
import Changes from "@/components/pages/services/seo/index/items/changes/Changes";
import ServiceText from "@/components/pages/services/items/serviceText/ServiceText";
import CollectionBtns from "@/components/reusable/collectionBtns/CollectionBtns";
import FeaturedProjects from "@/components/pages/services/items/featuredProjets/FeaturedProjects";
import AreYouReady from "@/components/reusable/areYouRedy/AreYouReady";
import Asked from "@/components/pages/services/items/asked/Asked";

const SeoService = ({data}) => {
  return (
    <>
      <PageHeader url={data.url} title={data.title}/>
      <ServiceInfo title={data.title} info={data.info}/>
      <DifferentService different={data.different}/>
      <Changes/>
      <ServiceText data={data.servicesText}/>
      <CollectionBtns/>
      <FeaturedProjects data={data.featuredProjects}/>
      <Asked data={data.asked}/>
      <AreYouReady/>
    </>
  );
};

export default SeoService;