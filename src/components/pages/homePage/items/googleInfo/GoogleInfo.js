import React, {useEffect, useRef} from 'react';
import BlockTitle from "@/components/reusable/text/blockTitle/BlockTitle";
import {
  GoogleInfoButton,
  GoogleInfoContainer,
  GoogleInfoContent, GoogleInfoText,
  GoogleInfoWrapper
} from "@/components/pages/homePage/items/googleInfo/style";
import showFromBottom from "@/components/reusable/animations/showFromBottom";

const GoogleInfo = () => {
  const ref = useRef(null);

  useEffect(() => {showFromBottom(ref)}, [])

  return (
    <GoogleInfoWrapper>
      <GoogleInfoContainer>
        <BlockTitle>
          We Make Google Love Your Brand
        </BlockTitle>
        <GoogleInfoContent ref={ref}>
          <GoogleInfoText className='item-text'>
            <p>
              Get comprehensive and aggressive digital marketing services driving more leads,
              customers and sales with our help.
              Grow your business faster than you ever thought possible!
            </p>
            <p>
              Request a free consultation to see how we can help.
            </p>
          </GoogleInfoText>
          <GoogleInfoButton>
            <button className={'button'}>request a free consultation</button>
          </GoogleInfoButton>
        </GoogleInfoContent>
      </GoogleInfoContainer>
    </GoogleInfoWrapper>
  );
};

export default GoogleInfo;