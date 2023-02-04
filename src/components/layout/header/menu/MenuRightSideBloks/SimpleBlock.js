import React from 'react';
import {
  SimpleBlockMoreLink,
  SimpleBlockText,
  SimpleBlockTitle, SimpleBlockWrapper
} from "@/components/layout/header/menu/MenuRightSideBloks/styles";

const SimpleBlock = ({list, moreLink}) => {

  return (
    <SimpleBlockWrapper>
      <ul>
        {list?.length > 0 && list.map((item, index) => (
          <li key={index + 'simpleBlock'}>
            <SimpleBlockTitle>{item.title}</SimpleBlockTitle>
            <SimpleBlockText>{item.description}</SimpleBlockText>
          </li>
        ))}
      </ul>
      {!!moreLink && <SimpleBlockMoreLink className='underline-link' href={moreLink.href}>{moreLink.title}</SimpleBlockMoreLink>}
    </SimpleBlockWrapper>

  );
};

export default SimpleBlock;