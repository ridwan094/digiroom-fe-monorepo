import React from "react";
import { logo } from "../../../../assets/images";
const NavLogo = ({}) => {
  return (
    <>
      <img className="h-[24px] md:h-[43px]" src={logo.src} alt="logo" />
    </>
  );
};

export default NavLogo;
