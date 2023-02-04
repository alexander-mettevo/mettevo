import React, {useEffect, useState} from 'react';
import {
  CheckBox,
  CheckBoxContainer,
  CheckBoxLabel,
  CheckBoxWrapper
} from "@/components/layout/footer/themeSwitcher/styles";
import {lightTheme} from "@/styles/themes/lightTheme";
import {darkTheme} from "@/styles/themes/darkTheme";

const ThemeSwitcher = () => (
    <div className='theme-handler__row'>
      <div className='theme-handler__wrapper'>
        <label className='theme-handler__label' htmlFor="theme-switch"/>
      </div>
    </div>
  );

export default ThemeSwitcher;