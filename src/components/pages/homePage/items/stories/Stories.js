import React from 'react';
import {StoriesGridWrapper, StoriesTitle, StoriesWrapper} from "@/components/pages/homePage/items/stories/styles";
import {BlockTitle} from "@/components/reusable/text/styles";
import {useSelector} from "react-redux";
import StoriesItem from "@/components/pages/homePage/items/stories/items/StoriesItem";
import ArrowLink from "@/components/reusable/links/ArrowLink";

const Stories = () => {
  const data = useSelector(state => state.homePage.homePageStories)

  return (
    <StoriesWrapper>
      <StoriesTitle>
        <BlockTitle>
          our stories and case studies
        </BlockTitle>
      </StoriesTitle>
      <StoriesGridWrapper>
        {
          data?.length > 0 && data.map((item, index) => (
            <StoriesItem item={item} key={index + 'Stories'}/>
          ))
        }
        <div>
          <ArrowLink href={'/projects'} title={'view all work'}/>
        </div>
      </StoriesGridWrapper>
    </StoriesWrapper>
  );
};

export default Stories;