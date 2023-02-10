import React from 'react';
import PageHeader from "@/components/pages/services/items/pageHeader/PageHeader";
import ServiceInfo from "@/components/pages/services/items/serviseInfo/ServiceInfo";
import DifferentService from "@/components/pages/services/items/differentService/DifferentService";
import ServiceText from "@/components/pages/services/items/serviceText/ServiceText";
import CollectionBtns from "@/components/reusable/collectionBtns/CollectionBtns";
import Asked from "@/components/pages/services/items/asked/Asked";
import AreYouReady from "@/components/reusable/areYouRedy/AreYouReady";

const OnPageSeoPage = ({data}) => {
  return (
    <>
      <PageHeader url={data.url} title={data.title}/>
      <ServiceInfo title={data.title} info={data.info}/>
      <DifferentService different={data.different}/>
      <ServiceText data={data.servicesText}/>
      <CollectionBtns/>
      <Asked data={data.asked}/>
      <AreYouReady/>
    </>
  );
};

export default OnPageSeoPage;