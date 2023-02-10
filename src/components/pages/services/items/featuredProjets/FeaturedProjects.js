import React from 'react';
import BlockTitle from "@/components/reusable/text/blockTitle/BlockTitle";
import seoServices from "@/mocData/services/seoServices";
import FeaturedProjectItem from "@/components/pages/services/items/featuredProjets/items/FeaturedProjectItem";
import style from './featured-projects.module.scss'

const FeaturedProjects = () => {
  return (
    <div className={'block-wrapper'}>
      <BlockTitle align={'right'}>
        Featured projects
      </BlockTitle>
      <div className={style['featured-projects__row']}>
        {seoServices.featuredProjects.length > 0 && seoServices.featuredProjects.map((item, index) => (
          <FeaturedProjectItem item={item} key={index + 'FeaturedProjects'}/>
          ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;