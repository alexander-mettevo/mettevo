import React, {useRef} from 'react';
import style from "./header-dropdown.module.scss";
import Link from "next/link";
import ProjectListMenuDropdown from "@/components/layout/header/menu/menuMobile/items/ProjectListMenuDropdown";

const MenuDropdownMenu = ({item, setIsOpen, isOpen, feedback, setShowForm}) => {
  const contentRef = useRef(null);

  const handleToggle = e => {
    e.preventDefault();

    if (isOpen) {
      setIsOpen('');
      setShowForm(false);
    }
    else {
      setIsOpen(item.title);
      if (feedback) setShowForm(feedback);
      else setShowForm(false);
    }
  };

  // console.log('MenuDropdownMenu', item.links)

  return (
    <div className={style['header-dropdown']}>
      <Link
        href={item.href}

        className={`${style['header-dropdown__title']} ${
          isOpen ? style['header-dropdown__title--open'] : ""
        }`}
      >
        {item.title}
        {!!item?.links > 0 && <span  onClick={handleToggle} className={`
        ${style['header-dropdown__rectangle']}
        ${
          isOpen ? style['header-dropdown__rectangle--open'] : ""
        }
        `}/>}
      </Link>
      <ul
        ref={contentRef}
        className={`${style['header-dropdown__items']} ${
          isOpen ? style['header-dropdown__items--open'] : ""
        }`}
        style={{maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : 0}}
      >
        {item?.links === 'action'  && <></>}
        {item?.links === 'simple'  && <ProjectListMenuDropdown projectList={item.links.menuList}/>}
        {/*{items?.menuList?.length > 0 && items.menuList.map((item, index) => {*/}
        {/*  if (item.type === 'action') {*/}
        {/*    return <></>*/}
        {/*  }*/}
        {/*  if (item.type === 'simple') {*/}
        {/*    return <></>*/}
        {/*  }*/}
        {/*})}*/}
      </ul>
    </div>
  );
};

export default MenuDropdownMenu;