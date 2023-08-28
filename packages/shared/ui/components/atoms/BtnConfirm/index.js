import { Fragment } from 'react';

const iconClassname = {
  fill: '',
  text: 'text',
  icon: 'rounded-full',
};

const BtnConfirm = ({
  children,
  loading,
  iconType,
  size,
  disabled,
  block,
  className,
  pressed = false,
  type = 'submit',
  colorSocialMediaContainer = '',
  ...props
}) => {
  const classNameAssigned = [
    'flex justify-end items-center p-3 gap-x-3 text-base font-bold lg:p-4 lg:justify-center lg:flex-1',
    block ? 'w-full' : '',
    pressed ? 'pressed' : '',
    className,
    disabled ? 'cursor-not-allowed' : '',
  ];

  return (
    <button
      className={classNameAssigned.join(' ')}
      disabled={disabled}
      // style={style}
      {...props}
    >
      {children ? children : <Fragment />}
    </button>
  );
};

BtnConfirm.defaultProps = {
  disabled: false,
  block: false,
  variant: 'bg-supportiveRed',
  size: 'large',
  colorSocialMediaContainer: '',
  // icon: null,
  iconType: 'fill',
  className: '',
  onClick: () => {},
  // style: {},
};

export default BtnConfirm;
