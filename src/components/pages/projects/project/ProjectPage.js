import React from 'react';
import AreYouReady from "@/components/reusable/areYouRedy/AreYouReady";
import ProjectTop from "@/components/pages/projects/project/items/projectTop/ProjectTop";
import ProjectContent from "@/components/pages/projects/project/items/projectContent/ProjectContent";
import NextProject from "@/components/pages/projects/project/items/projectNavigation/NextProject";

const ProjectPage = ({data}) => {
  return (
    <>
      <ProjectTop topInfo={data.topInfo}/>
      <ProjectContent content={data.content}/>
      <NextProject nextProject={data.nextProject}/>
      <AreYouReady/>
    </>
  );
};

export default ProjectPage;