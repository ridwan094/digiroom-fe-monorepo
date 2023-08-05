import React from "react";
import { MdPersonOutline } from "react-icons/md";

const BtnLoginSignup = (props) => {
  return (
    <button className="flex items-center gap-1 px-1 h-10" {...props}>
      <MdPersonOutline className="text-xl" />
      <p className="text-xs">
        <span className="font-semibold">login</span> / Sign Up
      </p>
    </button>
  );
};

export default BtnLoginSignup;
