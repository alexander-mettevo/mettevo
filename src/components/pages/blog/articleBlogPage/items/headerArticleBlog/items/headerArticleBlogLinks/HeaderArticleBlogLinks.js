import React, {useEffect, useState} from 'react';
import {FacebookShareButton, LinkedinShareButton, TwitterShareButton,} from "react-share";
import style from './share.module.scss'

const HeaderArticleBlogLinks = () => {
  const [url, setUrl] = useState('')

  useEffect(() => {
    setUrl(window.location.href)
  }, [])

  return (
    <div className={style['share']}>
      <div  className={style['share__text']}>Share this:</div>
      <ul className={style['share__list']}>
        <li>
          <FacebookShareButton  className={`${style['share__item']} underline-link`} url={url}> Facebook</FacebookShareButton>
        </li>
        <li>
          <TwitterShareButton  className={`${style['share__item']} underline-link`} url={url}>Twitter</TwitterShareButton>
        </li>
        <li>
          <LinkedinShareButton  className={`${style['share__item']} underline-link`} url={url}>LinkedIn</LinkedinShareButton>
        </li>
      </ul>
    </div>
  );
};

export default HeaderArticleBlogLinks;