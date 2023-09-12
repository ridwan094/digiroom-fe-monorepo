import React, { useState, useEffect } from 'react';

const ToggleSwitch = ({
  index,
  className,
  disabled,
  type,
  value,
  classNameInput,
  classNameLabel,
  onToggleChange,
}) => {
  const [isChecked, setIsChecked] = useState(value);

  useEffect(() => {
    setIsChecked(value);
  }, [value]);

  const handleToggle = () => {
    const newValue = !isChecked;
    onToggleChange({ value: newValue, data: index });
  };

  const labelClassName = `${classNameLabel} ${disabled ? 'hover:cursor-not-allowed' : ''} `;

  return (
    <label className={className}>
      <input
        type={type}
        disabled={disabled}
        checked={isChecked}
        onChange={handleToggle}
        className={classNameInput}
      />
      <div className={labelClassName}></div>
    </label>
  );
};

ToggleSwitch.defaultProps = {
  className: 'relative inline-flex items-center cursor-pointer',
  type: 'checkbox',
  disabled: '',
  value: false,
  classNameInput: 'sr-only peer',
  classNameLabel:
    "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600",
};

export default ToggleSwitch;
