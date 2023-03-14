import {useController, useFieldArray} from "react-hook-form";
import CustomCheckbox from "@/components/reusable/forms/CustomCheckbox";
import React from "react";

const CheckboxGroup = ({ options, control, name }) => {
  const { field } = useController({
    control,
    name
  });
  const [value, setValue] = React.useState(field.value || []);

  return (
    <>
      {options.map((option, index) => (
        <CustomCheckbox
          id={option.id}
          title={option.title}
          value={option.id}
          key={option.id + index}
          onChange={(e) => {
            const valueCopy = [...value];
            valueCopy[index] = e.target.checked ? e.target.value : null;
            field.onChange(valueCopy);
            setValue(valueCopy);
          }}
        />
      ))}
    </>
  );
};

export default CheckboxGroup;