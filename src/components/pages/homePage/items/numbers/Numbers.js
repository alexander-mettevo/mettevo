import React from 'react';
import {BlockTitle} from "@/components/reusable/text/styles";
import {NumbersHeader, NumbersRow, NumbersWrapper} from "@/components/pages/homePage/items/numbers/styles";
import ArrowLink from "@/components/reusable/links/ArrowLink";
import NumbersItem from "@/components/pages/homePage/items/numbers/NumbersItem";

const Numbers = () => {
  return (
    <NumbersWrapper>
      <NumbersHeader>
        <BlockTitle>
          Mettevo in numbers
        </BlockTitle>
        <ArrowLink href={'/about_us'} title={'about us'}/>
      </NumbersHeader>
      <NumbersRow>
        <NumbersItem text={'years old company'} value={3}/>
        <NumbersItem text={'complete projects'} value={'100+'}/>
        <NumbersItem text={'hours of experience of implementing SEO strategies'} value={'10k'}/>
        <NumbersItem text={'revenue of client’s companies per years'} value={'>$20M '}/>
      </NumbersRow>
    </NumbersWrapper>
  );
};

export default Numbers;