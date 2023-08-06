import React from "react";
import { MdOutlineCall } from "react-icons/md";

const BtnContactUs = (props) => {
  return (
    <button className="flex items-center gap-1 px-1 h-10" {...props}>
      <MdOutlineCall className="text-xl" />
      <p className="text-xs">Hubungi Kami</p>
    </button>
  );
};

export default BtnContactUs;
