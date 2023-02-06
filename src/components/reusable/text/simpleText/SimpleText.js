import React, {useEffect, useRef} from 'react';
import showFromBottom from "@/components/reusable/animations/showFromBottom";

const SimpleText = ({title, text}) => {
  const ref = useRef(null);

  useEffect(() => {showFromBottom(ref)}, [])

  return (
    <div className={'simple-text'} ref={ref}>
      <h5 className='simple-text__title item-title'>
        {title}
      </h5>
      <p className='item-text'>
        {text}
      </p>
    </div>
  );
};

export default SimpleText;