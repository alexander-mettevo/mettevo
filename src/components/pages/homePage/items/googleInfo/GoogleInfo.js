import React from 'react';
import BlockTitle from "@/components/reusable/text/blockTitle/BlockTitle";
import Button from "@/components/reusable/button/Button";
import {
  GoogleInfoButton,
  GoogleInfoContainer,
  GoogleInfoContent, GoogleInfoText,
  GoogleInfoWrapper
} from "@/components/pages/homePage/items/googleInfo/style";

const GoogleInfo = () => {
  return (
    <GoogleInfoWrapper>
      <GoogleInfoContainer>
        <BlockTitle>
          We Make Google Love Your Brand
        </BlockTitle>
        <GoogleInfoContent>
          <GoogleInfoText>
            <p>
              Get comprehensive and aggressive digital marketing services driving more leads,
              customers and sales with our help.
              Grow your business faster than you ever thought possible!
            </p>
            Request a free consultation to see how we can help.
          </GoogleInfoText>
          <GoogleInfoButton>
            <Button text={'request a free consultation'}/>
          </GoogleInfoButton>
        </GoogleInfoContent>
      </GoogleInfoContainer>
    </GoogleInfoWrapper>
  );
};

export default GoogleInfo;