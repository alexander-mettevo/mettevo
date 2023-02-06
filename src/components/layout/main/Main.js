import React from 'react';
import dynamic from "next/dynamic";

const Animation = dynamic(
  () => import('@/components/layout/main/AnimationBackground'),
  { ssr: false }
)
const MainComponent = ({children}) => {
  return (
    <main>
      <Animation triangleCount={50}/>
      {children}
    </main>
  );
};

export default MainComponent;