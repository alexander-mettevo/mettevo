import React from 'react';
import BlockTitle from "@/components/reusable/text/blockTitle/BlockTitle";
import ReviewsContent from "@/components/pages/homePage/items/reviews/items/ReviewsContent";
import {MainBlockWrapper} from "@/components/reusable/bloks/styles";

const Reviews = () => {
  return (
    <MainBlockWrapper>
      <BlockTitle align={'right'}>
        reviews
      </BlockTitle>
      <ReviewsContent/>
    </MainBlockWrapper>
  );
};

export default Reviews;