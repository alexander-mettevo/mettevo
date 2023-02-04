import React from 'react';
import {
  ReviewsItemDate,
  ReviewsItemLeft, ReviewsItemLeftBottom, ReviewsItemMainLogoWrapper,
  ReviewsItemRight,
  ReviewsItemRow,
  ReviewsItemRowBio, ReviewsItemSmallLogoWrapper
} from "@/components/pages/homePage/items/reviews/styles";
import FullStar from "@/components/reusable/stars/FullStar";
import EmptyStar from "@/components/reusable/stars/EmptyStar";
import dynamic  from "next/dynamic";
import Image from "next/image";

const Rating = dynamic(
  () => import("react-simple-star-rating")
    .then((module => module.Rating)),
  {ssr: false});


const ReviewsItem = ({item}) => {
  return (
    <ReviewsItemRow>
      <ReviewsItemLeft>
        <ReviewsItemMainLogoWrapper className={'wrapper-img'}>
          <Image className='custom-img' src={item.logs.mainLogo} alt={'review logo'} fill/>
        </ReviewsItemMainLogoWrapper>
        <ReviewsItemLeftBottom>
          <ReviewsItemSmallLogoWrapper className={'wrapper-img'}>
            <Image className='custom-img' src={item.logs.smallLogo} alt={'review small logo'} fill/>
          </ReviewsItemSmallLogoWrapper>
          <Rating className={'reviews-star'} emptyIcon={<EmptyStar size={50}/>} fillIcon={<FullStar size={50}/>} readonly fillColor={'#303030'} initialValue={item.rating} />

        </ReviewsItemLeftBottom>
      </ReviewsItemLeft>
      <ReviewsItemRight>
        <div>
          <p className='item-text'>
            {item.text}
          </p>
          <ReviewsItemRowBio>
            {item.bio}
          </ReviewsItemRowBio>
        </div>
        <ReviewsItemDate>
          {item.date}
        </ReviewsItemDate>
      </ReviewsItemRight>
    </ReviewsItemRow>
  );
};

export default ReviewsItem;