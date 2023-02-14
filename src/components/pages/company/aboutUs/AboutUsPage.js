import React from 'react';
import PageHeader from "@/components/pages/services/items/pageHeader/PageHeader";
import AlignContent from "@/components/reusable/text/alignContetn/AlignContent";
import WhyDifferent from "@/components/pages/company/aboutUs/items/whyDifferent/WhyDifferent";
import TopText from "@/components/pages/company/aboutUs/items/TopText";
import Team from "@/components/pages/company/aboutUs/items/team/Team";

const AboutUsPage = ({data}) => {
  return (
    <>
      <PageHeader title={data.title}/>
      <TopText text={data.box}/>
      <WhyDifferent/>
      <Team list={data.team}/>
      <Team list={data.team}/>
    </>
  );
};

export default AboutUsPage;