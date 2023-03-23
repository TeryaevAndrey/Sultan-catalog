import React, { FC } from "react";
import DeleteImg from "../assets/images/clear.svg";

const Delete: FC = () => {
  return (
    <button className="max-h-[59px] bg-orange-001 rounded-full min-w-[59px] w-[59px] h-[59px] flex justify-center items-center">
      <img src={DeleteImg} alt="delete" />
    </button>
  );
};

export default Delete;
