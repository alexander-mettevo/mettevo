import React, {useEffect, useRef, useState} from 'react';
import {BounceItem, BounceWrapper} from "@/components/reusable/bounce/styles";
import bounceAnimationScript from "@/components/reusable/bounce/animationScript";

const Bounce = ({
                  children,
                  size,
                  color,
                  top,
                  left,
                  mobileSize
}) => {
  const ref = useRef(null);
  useEffect(() => {bounceAnimationScript(ref);}, []);

  return (
    <BounceWrapper
      ref={ref}
      size={size}
      color={color}
      top={top}
      left={left}
      mobileSize={mobileSize}
    >
      <BounceItem>
        {children}
      </BounceItem>
    </BounceWrapper>
  );
};

export default Bounce;