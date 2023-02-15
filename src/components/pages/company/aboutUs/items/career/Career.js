import React from 'react';
import ArrowLink from "@/components/reusable/links/arrowLink/ArrowLink";
import CareerItem from "@/components/pages/company/aboutUs/items/career/items/CareerItem";
import style from './career.module.scss'

const Career = ({careers}) => {
  return (
    <div className={'block-wrapper'}>
      <div className={'block-title'}>
        Career
      </div>
      <div className={style['career__row']}>
        {careers.length > 0 && careers.map((item, index) => (
          <CareerItem item={item} key={index + 'career'}/>
        ))}
      </div>
      <ArrowLink href={'/career'} title={'discover mettevo vacancies'}/>
    </div>
  );
};

export default Career;