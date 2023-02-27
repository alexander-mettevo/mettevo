import React from 'react';

const CustomCheckbox = ({title, id, ...props}) => {
  return (
    <div className={'checkbox'}>
      <input className={'checkbox__input'} type="checkbox" id={id}   {...props}/>
      <label className={'checkbox__label'} htmlFor={id}>
        {title}
      </label>
    </div>
  );
};

export default CustomCheckbox;