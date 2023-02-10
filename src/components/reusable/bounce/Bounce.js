import React, {useEffect, useRef, useState} from 'react';
import bounceAnimationScript from "@/components/reusable/bounce/animationScript";
import useWindowSize from "@/hooks/useWindowSize";
import style from './Bounce.module.scss';

const Bounce = ({
                  children,
                  size,
                  color,
                  top,
                  left,
                  mobileSize
                }) => {
  const ref = useRef(null);
  const {width} = useWindowSize()
  useEffect(() => {
    bounceAnimationScript(ref);
  }, []);
  const [inlineStyle, setStyle] = useState({})

  useEffect(() => {
    const finishSize = (mobileSize && width < 650) ? mobileSize : size

    const state = {
      color: color === '#101010' ? '#fff' : '#101010',
      border: `${color === '#101010' ? '#fff' : 'transparent'} 1px solid`,
      width: finishSize,
      height: finishSize,
      top,
      left,
      backgroundColor: color,
    }

    setStyle(state)
  }, [])

  useEffect(() => {
    if (mobileSize && width < 650) {
      setStyle(prevState => ({
        ...prevState,
        width: mobileSize,
        height: mobileSize
      }))
    }
  }, [width])

  return (
    <div
      className={style.Bounce}
      ref={ref}
      style={inlineStyle}
    >
      <div className={style.BounceItem}>
        {children}
      </div>
    </div>
  );
};

export default Bounce;