import React from 'react';
import BlockTitle from "@/components/reusable/text/blockTitle/BlockTitle";
import ReviewsContent from "@/components/pages/homePage/items/reviews/items/ReviewsContent";

const Reviews = ({reviews}) => {
  return (
    <div className='block-wrapper'>
      <BlockTitle align={'right'}>
        reviews
      </BlockTitle>
      <ReviewsContent reviews={reviews}/>
    </div>
  );
};

export default Reviews;