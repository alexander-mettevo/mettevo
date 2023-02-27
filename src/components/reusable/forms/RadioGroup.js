import React from 'react';
import {useController} from "react-hook-form";

const RadioGroup = ({options, control, name}) => {
  const {field} = useController({
    control,
    name
  });

  return (
    <>
      {options.map((option, index) => (
        <div className={'checkbox'} key={option.id + index}>
          <input
            className={'checkbox__input'}
            type="radio"
            id={option.id}
            name={name}
            value={option.id}
            onClick={(e) => {
              const value = e.target.checked ? e.target.value : null;
              field.onChange(value);
            }}
          />
          <label className={'checkbox__label'} htmlFor={option.id}>
            {option.title}
          </label>
        </div>
      ))}
    </>
  );
}

export default RadioGroup;