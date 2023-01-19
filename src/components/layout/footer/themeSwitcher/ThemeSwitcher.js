import React, {useEffect, useState} from 'react';
import {
  CheckBox,
  CheckBoxContainer,
  CheckBoxLabel,
  CheckBoxWrapper
} from "@/components/layout/footer/themeSwitcher/styles";
import {lightTheme} from "@/styles/themes/lightTheme";
import {darkTheme} from "@/styles/themes/darkTheme";

const ThemeSwitcher = ({setTheme}) => {
  const [checked, setChecked] = useState(false);
  const handleTheme = e => {
    const localTheme = localStorage.getItem('theme');

    if (localTheme === 'dark') {
      setTheme(lightTheme);
      localStorage.setItem('theme', 'light');
      setChecked(false);
    } else {
      setTheme(darkTheme);
      localStorage.setItem('theme', 'dark');
      setChecked(true);
    }
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme === 'dark') {
      setChecked(true);
    }
  }, [])



  return (
    <CheckBoxContainer>
      <CheckBoxWrapper>
        <CheckBox onChange={() => {}} id="checkbox" checked={checked} type="checkbox"/>
        <CheckBoxLabel onClick={handleTheme} htmlFor="checkbox"/>
      </CheckBoxWrapper>
    </CheckBoxContainer>
  );
};

export default ThemeSwitcher;