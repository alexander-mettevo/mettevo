import React, {useEffect, useRef} from 'react';
import BlockTitle from "@/components/reusable/text/blockTitle/BlockTitle";
import showFromBottom from "@/components/reusable/animations/showFromBottom";

const GoogleInfo = () => {
  const ref = useRef(null);

  useEffect(() => {showFromBottom(ref)}, [])

  return (
    <div className={'google-info'}>
      <div className={'google-info__wrapper'}>
        <BlockTitle>
          We Make Google Love Your Brand
        </BlockTitle>
        <div className={'google-info__content'} ref={ref}>
          <div className='google-info__text item-text'>
            <p>
              Get comprehensive and aggressive digital marketing services driving more leads,
              customers and sales with our help.
              Grow your business faster than you ever thought possible!
            </p>
            <p>
              Request a free consultation to see how we can help.
            </p>
          </div>
          <div className={'google-info__button'}>
            <button className={'button'}>request a free consultation</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleInfo;