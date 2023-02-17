import React from 'react';
import ProjectContentItem from "@/components/pages/projects/project/items/projectContent/items/ProjectContentItem";
import style from './project-content.module.scss'

const ProjectContent = ({content}) => {
  return (
    <div className={style['project-content']}>
      {content.map((item, index) => <ProjectContentItem item={item} key={index + 'project-item'}/>)}
    </div>
  );
};

export default ProjectContent;