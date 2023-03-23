import React from "react";
import ShareImg from "../assets/images/share.svg";

const Share = () => {
  return (
    <button className="w-[59px] h-[59px] lg:w-[77px] lg:h-[77px] flex justify-center items-center rounded-[10px] shadow-sm cursor-pointer">
      <img className="w-6 h-6" src={ShareImg} alt="share" />
    </button>
  );
};

export default Share;
