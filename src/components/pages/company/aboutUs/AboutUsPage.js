import React from 'react';
import PageHeader from "@/components/pages/services/items/pageHeader/PageHeader";
import WhyDifferent from "@/components/pages/company/aboutUs/items/whyDifferent/WhyDifferent";
import TopText from "@/components/pages/company/aboutUs/items/TopText";
import Team from "@/components/pages/company/aboutUs/items/team/Team";
import SEO from "@/components/pages/company/aboutUs/items/seo/SEO";
import Partners from "@/components/pages/company/aboutUs/items/partners/Partners";
import Certifications from "@/components/pages/company/aboutUs/items/certifications/Certifications";
import Career from "@/components/pages/company/aboutUs/items/career/Career";
import AreYouReady from "@/components/reusable/areYouRedy/AreYouReady";

const AboutUsPage = ({data}) => {
  return (
    <>
      <PageHeader title={data.title}/>
      <TopText text={data.box}/>
      <WhyDifferent/>
      <Team list={data.team}/>
      <SEO list={data.seo}/>
      <Partners partners={data.partners}/>
      <Certifications certifications={data.certifications}/>
      <Career careers={data.careers}/>
      <AreYouReady/>
    </>
  );
};

export default AboutUsPage;