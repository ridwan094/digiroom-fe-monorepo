const Input = ({
  id,
  size,
  type,
  error,
  icon,
  iconPosition,
  focus,
  value,
  containerClassName,
  label,
  labelClassName,
  inputClassName,
  register,
  disabled,
  danger,
  formatText,
  showMessageError = true,
  ...props
}) => {
  const sizeClassName = {
    small: `w-full px-4 py-2 text-sm leading-4`,
    medium: `w-full px-4 py-2 text-base leading-4`,
    large: `w-full px-4 py-2 text-lg leading-4`,
  };

  // tailwind styling
  const dafaultStyling = `w-full outline-none ${
    disabled ? 'bg-reliableBlack10 text-reliableBlack5' : 'bg-[#f8f8f8] text-reliableBlack70'
  } border-b-2 border-reliableBlack30 focus:border-b-2`;

  return (
    <div className={containerClassName}>
      <div className={`relative`}>
        {/* --- label --- */}
        {label && <label className={labelClassName}>{label}</label>}

        {/* -- icon --- */}
        {icon && (
          <div
            className={`absolute inset-y-0 ${
              iconPosition === 'right' ? 'right-0' : 'left-0'
            } flex items-center`}
          >
            {icon}
          </div>
        )}

        {/* --- input --- */}
        <div className={formatText ? `flex items-center gap-2` : ``}>
          <input
            id={id}
            type={type}
            value={value}
            disabled={disabled}
            className={`${inputClassName} ${dafaultStyling} ${sizeClassName[size]} ${
              iconPosition === 'left' ? 'pl-11' : 'pl-4'
            } ${danger && '!border-supportiveRed'} ${error && '!border-shadeRed'} focus:${
              focus || 'border-reliableBlack5'
            }`}
            {...register}
            {...props}
          />
          <p className={formatText ? `flex-shrink-0 mt-2 w-[56px]` : `hidden`}>{formatText}</p>
        </div>
      </div>

      {/* --- showed when input already touched before and error has a string --- */}
      {!showMessageError ? (
        ''
      ) : error ? (
        <div className="flex items-center gap-[5.67px]">
          <span className="text-supportiveRed text-[14px] leading-[20px] font-[400]">{error}</span>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

Input.defaultProps = {
  focus: 'outline-none',
  size: 'large',
  type: 'text',
  value: '',
  disabled: false,
  error: '',
  icon: false,
  containerClassName: '',
  formatText: null,
};

export default Input;
