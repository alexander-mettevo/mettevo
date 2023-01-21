import React from 'react';
import {BlockTitle} from "@/components/reusable/text/styles";
import Button from "@/components/reusable/button/Button";
import {
  GoogleInfoContainer,
  GoogleInfoContent,
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
          <div>
            Get comprehensive and aggressive digital marketing services driving more leads, customers and sales with our help. Grow your business faster than you ever thought possible!
            Request a free consultation to see how we can help.
          </div>
          <div>
            <Button text={'request a free consultation'}/>
          </div>
        </GoogleInfoContent>
      </GoogleInfoContainer>
    </GoogleInfoWrapper>
  );
};

export default GoogleInfo;