import React from 'react';
import PageHeader from "@/components/pages/services/items/pageHeader/PageHeader";
import AreYouReady from "@/components/reusable/areYouRedy/AreYouReady";
import ProjectsTabs from "@/components/pages/projects/projectList/items/ProjectsTabs";

const ProjectListPage = ({data}) => (
    <>
      <PageHeader title={data.title}/>
      <ProjectsTabs list={data.list}/>
      <AreYouReady/>
    </>
  );

export default ProjectListPage;