import React from 'react';
import {CustomCheckboxWrapper} from "@/components/reusable/forms/styles";

const CustomCheckbox = ({title, checked, setChecked}) => {
  return (
    <CustomCheckboxWrapper checked={checked}>
      {title}
      <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>
    </CustomCheckboxWrapper>
  );
};

export default CustomCheckbox;