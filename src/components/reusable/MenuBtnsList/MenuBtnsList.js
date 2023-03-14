import React, {useEffect, useState} from 'react';
import Link from "next/link";
import useWindowSize from "@/hooks/useWindowSize";
import style from './menu-list.module.scss'

const MenuBtnsList = React.memo((props) => {
  const {
    list,
    currentState,
    onClickItem,
    keyWord,
    desktopFS,
    mobileFS,
    rectangleSize,
    adaptiveRectangleSize,
    noteFS
  } = props

  const {width} = useWindowSize();
  const [sizes, setSizes] = useState({
    fs: desktopFS,
    rectangleSize: rectangleSize,
  });

  useEffect(() => {
    if (width < 768) {
      setSizes(prevState => ({
        ...prevState,
        fs: mobileFS,
        rectangleSize: adaptiveRectangleSize
      }))
    } else if (width < 1440) {
      setSizes(prevState => ({
        ...prevState,
        fs: noteFS ? noteFS : mobileFS
      }))
    }
  }, [width])

  const handleSetCurrentItem = (e, item) => {
    if (!!item?.data) {
      onClickItem(item.id)
    }
  }
  return (
    <ul style={{fontSize: sizes.fs}}>
      {list.length > 0 && list.map((item, index) => (
        <>
          <li className={style['menu-list__item']}
              key={index + keyWord}
              style={{
                '--rectangle-size': sizes.rectangleSize,
                '--display-rectangle': currentState === item.id ? 'block' : 'none',
                '--weight': currentState === item.id ? 700 : 400,
              }}
          >
            {
              !!item?.href ?
                <Link onPointerEnter={(e) => handleSetCurrentItem(e, item)} href={item.href}>{item.title}</Link> :
                <span onClick={() => onClickItem(item.id)}>{item.title}</span>
            }
          </li>
        </>

      ))}
    </ul>
  );
});

export default MenuBtnsList;