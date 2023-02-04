import React from 'react';
import {MenuBottomRow} from "@/components/layout/header/menu/styles";
import Link from "next/link";

const MenuBottom = () => {
  return (
    <MenuBottomRow>
      <Link className='underline-link' href={'test'}>Facebook</Link>
      <Link className='underline-link' href={'test'}>Instagram</Link>
      <Link className='underline-link' href={'test'}>TikTok</Link>
      <Link className='underline-link' href={'test'}>Linkedin</Link>
    </MenuBottomRow>
  );
};

export default MenuBottom;