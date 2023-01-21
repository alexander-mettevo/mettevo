import React from 'react';
import TitlePage from "@/components/reusable/text/titlePage/TitlePage";
import GoogleInfo from "@/components/pages/homePage/items/googleInfo/GoogleInfo";

const HomePage = () => {
  return (
    <>
      <TitlePage title={'Mettevo'} subtitle={'Digital marketing Agency'}
                 text={'is an experienced team of web developers, UI/UX designers, SEO and SMM experts to disclose your sales capability through the web.'}/>
      <GoogleInfo/>
    </>
  );
};

export default HomePage;