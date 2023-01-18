
import React from 'react';
import Header from "./header/Header";
import {Main} from "./header/styles";


const MainLayout = ({children}) => {
  return (
    <>
      <Header/>
      <Main>
        {children}
      </Main>
    </>
  );
};

export default MainLayout;