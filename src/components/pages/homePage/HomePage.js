import React from 'react';
import GoogleInfo from "@/components/pages/homePage/items/googleInfo/GoogleInfo";
import AnimationTitlePage from "@/components/reusable/text/animationTitlePage/AnimationTitlePage";

const HomePage = () => {
  return (
    <>
      <AnimationTitlePage  subtitle={'Digital marketing Agency'}
                 text={'is an experienced team of web developers, UI/UX designers, SEO and SMM experts to disclose your sales capability through the web.'}/>
      <GoogleInfo/>
    </>
  );
};

export default HomePage;