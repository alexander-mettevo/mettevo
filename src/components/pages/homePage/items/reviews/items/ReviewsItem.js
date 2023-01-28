import React from 'react';
import {
  ReviewsItemDate,
  ReviewsItemLeft, ReviewsItemLeftBottom, ReviewsItemMainLogoWrapper,
  ReviewsItemRight,
  ReviewsItemRow,
  ReviewsItemRowBio, ReviewsItemSmallLogoWrapper
} from "@/components/pages/homePage/items/reviews/styles";
import {CustomImage} from "@/components/reusable/image/styles";
import {ItemText} from "@/components/reusable/text/styles";
import {Rating} from "react-simple-star-rating";
import FullStar from "@/components/reusable/stars/FullStar";
import EmptyStar from "@/components/reusable/stars/EmptyStar";

const ReviewsItem = ({item}) => {
  return (
    <ReviewsItemRow>
      <ReviewsItemLeft>
        <ReviewsItemMainLogoWrapper>
          <CustomImage src={item.logs.mainLogo} alt={'review logo'} fill/>
        </ReviewsItemMainLogoWrapper>
        <ReviewsItemLeftBottom>
          <ReviewsItemSmallLogoWrapper>
            <CustomImage src={item.logs.smallLogo} alt={'review small logo'} fill/>
          </ReviewsItemSmallLogoWrapper>
          <Rating className={'reviews-star'} emptyIcon={<EmptyStar size={50}/>} fillIcon={<FullStar size={50}/>} readonly fillColor={'#303030'} initialValue={item.rating} />

        </ReviewsItemLeftBottom>
      </ReviewsItemLeft>
      <ReviewsItemRight>
        <div>
          <ItemText>
            {item.text}
          </ItemText>
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