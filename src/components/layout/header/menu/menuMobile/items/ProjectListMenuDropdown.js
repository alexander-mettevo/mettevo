import React from 'react';
import Link from "next/link";
import style from "./header-dropdown.module.scss";

const ProjectListMenuDropdown = ({projectList}) => {
  return (
    <ul>
      {projectList?.length > 0 && projectList.map((project, index) => (
        <li className={style['item-header']} key={index + 'ProjectListMenuDropdown'}>
              <Link className={`${style['item-header__title']} underline-link`} href={project.href}>{project.title}</Link>
              <p className={style['item-header__text']}>{!!project?.description ? project?.description : project.data.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default ProjectListMenuDropdown;