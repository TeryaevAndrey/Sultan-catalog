import React from "react";
import ShareImg from "../assets/images/share.svg";

const Share = () => {
  return (
    <button className="w-[59px] h-[59px] flex justify-center items-center rounded-[10px] shadow-[0px_15px_70px_-11px_rgba(43,28,1,0.04)] cursor-pointer">
      <img className="w-6 h-6" src={ShareImg} alt="share" />
    </button>
  );
};

export default Share;
