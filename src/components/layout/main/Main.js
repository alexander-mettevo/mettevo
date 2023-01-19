import React from 'react';
import {MainWrapper} from "@/components/layout/main/styles";
import dynamic from "next/dynamic";

const Animation = dynamic(
  () => import('@/components/layout/main/AnimationBackground'),
  { ssr: false }
)
const MainComponent = ({children}) => {
  return (
    <MainWrapper>
      <Animation triangleCount={50}/>
      {children}
    </MainWrapper>
  );
};

export default MainComponent;