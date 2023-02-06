import React from 'react';

const CustomCheckbox = ({title, checked, setChecked, id}) => {
  return (
    <div className={'checkbox'}>
      <input className={'checkbox__input'} type="checkbox" id={id} checked={checked} onChange={() => setChecked(!checked)}/>
      <label className={'checkbox__label'} htmlFor={id}>
        {title}
      </label>
    </div>
  );
};

export default CustomCheckbox;