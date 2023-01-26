import React from 'react';
import GoogleInfo from "@/components/pages/homePage/items/googleInfo/GoogleInfo";
import AnimationTitlePage from "@/components/reusable/text/animationTitlePage/AnimationTitlePage";
import Services from "@/components/pages/homePage/items/services/Services";
import Numbers from "@/components/pages/homePage/items/numbers/Numbers";
import StandOut from "@/components/pages/homePage/items/standOut/StandOut";

const HomePage = () => {
  return (
    <>
      <AnimationTitlePage  subtitle={'Digital marketing Agency'}
                 text={'is an experienced team of web developers, UI/UX designers, SEO and SMM experts to disclose your sales capability through the web.'}/>
      <GoogleInfo/>
      <Services/>
      <Numbers/>
      <StandOut/>
    </>
  );
};

export default HomePage;