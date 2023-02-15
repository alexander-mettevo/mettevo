import React from 'react';
import Image from "next/image";
import style from './team.module.scss';

const Team = ({list}) => {
  return (
    <div className={'block-wrapper'}>
      <div className={'block-title block-title_right'}>
        Mettevo Team
      </div>
      <p className={`block-subtitle block-subtitle_right`}>
        Our team brings together the best specialists to solve a variety of tasks with an advantage for your business
      </p>
      <div className={style['team__collection']}>
        {list?.length > 0 && list.map((item, index) => (
          <div key={index + 'team'} className={style['team__image-wrap']}>
            <div data-mouse={'View'} className={`${style['team__image']} container-img`}>
              <Image src={item.url} fill alt={item.alt}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;