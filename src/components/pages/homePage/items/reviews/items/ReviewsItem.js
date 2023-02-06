import React from 'react';
import FullStar from "@/components/reusable/stars/FullStar";
import EmptyStar from "@/components/reusable/stars/EmptyStar";
import dynamic from "next/dynamic";
import Image from "next/image";

const Rating = dynamic(
  () => import("react-simple-star-rating")
    .then((module => module.Rating)),
  {ssr: false});


const ReviewsItem = ({item}) => {
  return (
    <div className={'item-reviews__row'}>
      <div className={'item-reviews__left'}>
        <div className={'item-reviews__main-logo wrapper-img'}>
          <Image className='custom-img' src={item.logs.mainLogo} alt={'review logo'} fill/>
        </div>
        <div className={'item-reviews__left-bottom'}>
          <div className={'item-reviews__small-logo wrapper-img'}>
            <Image className='custom-img' src={item.logs.smallLogo} alt={'review small logo'} fill/>
          </div>
          <Rating className={'reviews-star'} emptyIcon={<EmptyStar size={50}/>} fillIcon={<FullStar size={50}/>} readonly fillColor={'#303030'} initialValue={item.rating} />
        </div>
      </div>
      <div className={'item-reviews__right'}>
        <div>
          <p className='item-text'>
            {item.text}
          </p>
          <divBio>
            {item.bio}
          </divBio>
        </div>
        <div className={'item-reviews__date'}>
          {item.date}
        </div>
      </div>
    </div>
  );
};

export default ReviewsItem;