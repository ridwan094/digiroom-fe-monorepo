import React from "react";
import { Fragment } from "react";

// const sizeClassName = {
//   small: "h-[38px] text-sm",
//   large: "h-[72px] text-base",
// };
const iconClassname = {
  fill: "",
  text: "text",
  icon: "rounded-full",
};
// sizeIconClassName = {
//   small: "h-8 w-8",
//   medium: "h-12 w-12",
//   large: "h-14 w-14",
// };

const ButtonConfirm = ({
  children,
  // inverted,
  loading,
  iconType,
  size,
  disabled,
  // icon,
  block,
  className,
  // style,
  pressed = false,
  type = "submit",
  colorSocialMediaContainer = "",
  ...props
}) => {
  const classNameAssigned = [
    "justify-end items-center p-3 gap-x-1.5 font-semibold",
    block ? "w-full" : "",
    pressed ? "pressed" : "",
    className,
    disabled ? "cursor-not-allowed" : "",
  ];

  return (
    <button
      className={classNameAssigned.join(" ")}
      disabled={disabled}
      // style={style}
      {...props}
    >
      {children ? children : <Fragment />}
    </button>
  );
};

ButtonConfirm.defaultProps = {
  inverted: false,
  disabled: false,
  block: false,
  variant: "bg-supportiveRed",
  size: "large",
  colorSocialMediaContainer: "",
  // icon: null,
  iconType: "fill",
  className: "",
  onClick: () => {},
  // style: {},
};

export default ButtonConfirm;
