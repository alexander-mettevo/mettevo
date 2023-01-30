import React, {useEffect, useRef} from 'react';
import {BlockTitleWrapper} from "@/components/reusable/text/styles";
import blockTitleAnimationScript from "@/components/reusable/text/blockTitle/animationScript";

const BlockTitle = ({align, children}) => {
  const ref = useRef(null);

  useEffect(() => {blockTitleAnimationScript(ref)}, [])

  return (
    <BlockTitleWrapper ref={ref} align={align}>
      {children}
    </BlockTitleWrapper>
  );
};

export default BlockTitle;