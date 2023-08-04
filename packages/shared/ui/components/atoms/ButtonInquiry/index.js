import React from "react";
import { Fragment } from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { PiLinkSimpleBold } from "react-icons/pi";

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

const ButtonInquiry = ({
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
    // inverted ? "inverted" : "",
    // type === "icon" ? sizeIconClassName[size] : sizeClassName[size],
    block ? "w-full" : "",
    pressed ? "pressed" : "",
    className,
  ];

  const classNameSocialMediaAssigned = ["flex justify-around items-center p-2"];

  const sosialMediaWrapper = [
    "border-2 border-black p-2",
    iconClassname[iconType],
  ];

  return (
    <div className="w-full">
      <div className={classNameSocialMediaAssigned.join(" ")}>
        <a
          href="/"
          rel="noreferrer"
          target="_blank"
          className={sosialMediaWrapper.join(" ")}
        >
          <FaTwitter size={20} color="#000" />
        </a>
        <a
          href="/"
          rel="noreferrer"
          target="_blank"
          className={sosialMediaWrapper.join(" ")}
        >
          <FaFacebookF size={20} color="#000" />
        </a>
        <a
          href="/"
          rel="noreferrer"
          target="_blank"
          className={sosialMediaWrapper.join(" ")}
        >
          <PiLinkSimpleBold size={20} color="#000" />
        </a>
      </div>
      <button
        className={classNameAssigned.join(" ")}
        disabled={disabled}
        // style={style}
        {...props}
      >
        {children ? children : <Fragment />}
      </button>
    </div>
  );
};

ButtonInquiry.defaultProps = {
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

export default ButtonInquiry;
