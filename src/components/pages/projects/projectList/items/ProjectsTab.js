import React from 'react';
import ImageLink from "@/components/reusable/links/imageLink/ImageLink";

const ProjectsTab = ({item}) => {
  return (
    <div>
      <ImageLink item={item}/>
    </div>
  );
};

export default ProjectsTab;