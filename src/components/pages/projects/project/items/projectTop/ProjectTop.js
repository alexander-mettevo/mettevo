import React from 'react';
import ProjectFullPage from "@/components/pages/projects/project/items/projectTop/items/ProjectFullPage";
import ProjectMid from "@/components/pages/projects/project/items/projectTop/items/ProjectMid";
import ProjectBottomImage from "@/components/pages/projects/project/items/projectTop/items/ProjectBottomImage";

const ProjectTop = ({topInfo}) => {
  return (
    <div>
      <ProjectFullPage image={topInfo.topHeaderImage}/>
      <ProjectMid title={topInfo.title} text={topInfo.text} tags={topInfo.tags} href={topInfo.href}/>
      <ProjectBottomImage image={topInfo.topFooterImage}/>
    </div>
  );
};

export default ProjectTop;