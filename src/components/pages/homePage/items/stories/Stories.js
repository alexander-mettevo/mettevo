import React from 'react';
import BlockTitle from "@/components/reusable/text/blockTitle/BlockTitle";
import {useSelector} from "react-redux";
import StoriesItem from "@/components/pages/homePage/items/stories/items/StoriesItem";
import ArrowLink from "@/components/reusable/links/ArrowLink";

const Stories = () => {
  const data = useSelector(state => state.homePage.homePageStories)

  return (
    <div className={'block-wrapper stories'}>
      <div className={'stories__title'}>
        <BlockTitle>
          our stories and case studies
        </BlockTitle>
      </div>
      <div className={'stories__grid'}>
        {
          data?.length > 0 && data.map((item, index) => (
            <StoriesItem item={item} key={index + 'Stories'}/>
          ))
        }
        <div>
          <ArrowLink href={'/projects'} title={'view all work'}/>
        </div>
      </div>
    </div>
  );
};

export default Stories;