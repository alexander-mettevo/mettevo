import React, {useEffect, useRef, useState} from 'react';
import {MainWrapper} from "@/components/layout/main/styles";
import dynamic from "next/dynamic";

const Animation = dynamic(
  () => import('@/components/layout/main/AnimationBackground'),
  { ssr: false }
)
const MainComponent = ({children}) => {
 const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {setHeight(ref.current.clientHeight)}, [])

  return (
    <MainWrapper ref={ref}>
      <Animation height={height} triangleCount={50}/>
      {children}
    </MainWrapper>
  );
};

export default MainComponent;