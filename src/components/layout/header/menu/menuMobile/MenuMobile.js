import React, {useState} from 'react';
import {useSelector} from "react-redux";
import MenuDropdownMenu from "@/components/layout/header/menu/menuMobile/items/MenuDropdownMenu";
import MenuBottom from "@/components/layout/header/menu/menuDesktop/MenuBottom";
import ActionsBlockForm from "@/components/layout/header/menu/menuDesktop/MenuRightSideBloks/Items/ActionsBlockForm";
import {rightSideData} from "@/store/slices/menuSlice/data";
import menu from "@/mocData/menu";

const MenuMobile = ({active}) => {
  const menu = useSelector(state => state.menu.menu)
  const [isOpen, setIsOpen] = useState( '')
  const [showForm, setShowForm] = useState(false)

  return (
    <div className={`top-menu top-menu__mobile ${active && 'top-menu_active'}`}>
      {menu?.length > 0 && menu.map((item, index) => (
        <MenuDropdownMenu
          feedback={item.feedback}
          isOpen={isOpen === item.title}
          setIsOpen={setIsOpen}
          setShowForm={setShowForm}
          item={item}
          key={index + 'dropDown'}/>
      ))}
      {showForm && <ActionsBlockForm showForm={showForm} title={isOpen}/>}
      <MenuBottom/>
    </div>
  );
};

export default MenuMobile;