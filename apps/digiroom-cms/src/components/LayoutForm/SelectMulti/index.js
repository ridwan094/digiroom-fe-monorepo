import React from 'react';
import { Controller } from 'react-hook-form';
import Select from 'react-select';

const CustomMultiSelect = ({
  name,
  control,
  options,
  isMulti,
  placeholder,
  className,
  defaultValue,
}) => {
  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Select
            isMulti={isMulti}
            placeholder={placeholder}
            options={options}
            defaultValue={defaultValue}
            className={className}
            {...field}
          />
        )}
      />
    </div>
  );
};

export default CustomMultiSelect;
