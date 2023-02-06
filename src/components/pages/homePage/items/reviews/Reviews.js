import React from 'react';
import BlockTitle from "@/components/reusable/text/blockTitle/BlockTitle";
import ReviewsContent from "@/components/pages/homePage/items/reviews/items/ReviewsContent";

const Reviews = () => {
  return (
    <div className='block-wrapper'>
      <BlockTitle align={'right'}>
        reviews
      </BlockTitle>
      <ReviewsContent/>
    </div>
  );
};

export default Reviews;