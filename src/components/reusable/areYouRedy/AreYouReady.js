import React, {useEffect, useRef} from 'react';
import showFromBottom from "@/components/reusable/animations/showFromBottom";
import BlockTitle from "@/components/reusable/text/blockTitle/BlockTitle";

const AreYouReady = () => {
  const ref = useRef(null);

  useEffect(() => {showFromBottom(ref)}, [])

  return (
    <div className={'are-you-ready'} ref={ref}>
      <BlockTitle >
        Are You Ready To Grow Your Website?
      </BlockTitle>
      <p className='item-text'>
        Understanding the ins and outs of website growth, we help ensure that your site grows over time with
        ever-increasing reach and accessibility. Not only do we employ the latest digital marketing techniques for
        driving traffic directly to your website, but our strategies also focus on gaining loyalty from those visitors
        so they come back again and again.
      </p>
      <p className='item-text'>
        Leave your contacts to get a comprehensive and aggressive digital marketing plan taking your business to new
        heights.
      </p>
    </div>
  );
};

export default AreYouReady;