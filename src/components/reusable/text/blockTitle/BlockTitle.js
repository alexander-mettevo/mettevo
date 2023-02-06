import React, {useEffect, useRef} from 'react';
import blockTitleAnimationScript from "@/components/reusable/text/blockTitle/animationScript";

const BlockTitle = ({align, children}) => {
  const ref = useRef(null);

  useEffect(() => {blockTitleAnimationScript(ref)}, [])

  return (
    <h2 className={`block-title ${!!align && 'block-title_' + align}`} ref={ref}>
      {children}
    </h2>
  );
};

export default BlockTitle;