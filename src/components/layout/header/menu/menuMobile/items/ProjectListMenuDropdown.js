import React from 'react';

const ProjectListMenuDropdown = ({projectList}) => {
  console.log('ProjectListMenuDropdown', projectList)
  return (
    <ul>
      {projectList?.length > 0 && projectList.map((project, index) => (
        <li>
          <div></div>
          <div></div>
        </li>
      ))}
    </ul>
  );
};

export default ProjectListMenuDropdown;