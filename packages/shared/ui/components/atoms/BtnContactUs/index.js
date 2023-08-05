import React from "react";
import { MdOutlineCall } from "react-icons/md";

const BtnContactUs = (props) => {
  return (
    <button className="flex text-reliableBlack items-center gap-1 px-2 h-10" {...props}>
      <MdOutlineCall size={"20px"} />
      <p className="text-xs">Contact Us</p>
    </button>
  );
};

export default BtnContactUs;
