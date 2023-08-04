import React from "react";
import { Fragment } from "react";

const sizeClassName = {
    small: "h-[38px] text-sm rounded",
    large: "h-[52px] text-base leading-[22px] rounded",
  },
  iconClassname = {
    fill: "",
    text: "text",
    icon: "rounded-full",
  },
  sizeIconClassName = {
    small: "h-8 w-8",
    medium: "h-12 w-12",
    large: "h-14 w-14",
  };

const Button = ({
  children,
  inverted,
  loading,
  iconType,
  size,
  variant,
  disabled,
  icon,
  block,
  className,
  style,
  pressed = false,
  type = "submit",
  ...props
}) => {
  const classNameAssigned = [
    "relative flex whitespace-nowrap",
    "justify-center items-center px-4 gap-x-1.5 font-semibold",
    variant,
    inverted ? "inverted" : "",
    iconClassname[iconType],
    type === "icon" ? sizeIconClassName[size] : sizeClassName[size],
    block ? "w-full" : "",
    pressed ? "pressed" : "",
    className,
  ];

  return (
    <button className={classNameAssigned.join(" ")} disabled={disabled} style={style} {...props}>
      {children ? <span className={`text-center`}>{children}</span> : <Fragment />}
    </button>
  );
};

Button.defaultProps = {
  inverted: false,
  disabled: false,
  block: false,
  variant: "bg-supportiveRed",
  size: "large",
  icon: null,
  iconType: "fill",
  className: "",
  onClick: () => {},
  style: {},
};

export default Button;
