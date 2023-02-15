import React, {useState} from 'react';
import ProjectsTab from "@/components/pages/projects/projectList/items/ProjectsTab";
import style from '../project-list.module.scss'

const ProjectsTabs = ({list}) => {
  const [tab, setTab] = useState('all')

  return (
    <div>
      <div className={style['project-list__controllers']}>
        <button className={`${style['project-list__btn']} ${tab === 'all' && style['project-list__btn_active']}`} onClick={() => setTab('all')}>all</button>
        <button className={`${style['project-list__btn']} ${tab === 'seo' && style['project-list__btn_active']}`} onClick={() => setTab('seo')}>seo</button>
        <button className={`${style['project-list__btn']} ${tab === 'smm' && style['project-list__btn_active']}`} onClick={() => setTab('smm')}>smm</button>
        <button className={`${style['project-list__btn']} ${tab === 'webDevelopment' && style['project-list__btn_active']}`} onClick={() => setTab('webDevelopment')}>web development</button>
      </div>
      <div className={style['project-list__grid']}>
        {list[tab].map((tab, i) => <ProjectsTab item={tab} key={i + 'projects'}/>)}
      </div>
    </div>
  );
};

export default ProjectsTabs;