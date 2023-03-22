import React, { FC } from "react";
import PrevImg from "../assets/images/prev.svg";
import NextImg from "../assets/images/next.svg";
import { Link } from "react-router-dom";

const Pagination: FC = () => {
  return (
    <div className="flex items-center gap-8">
      <img
        className="w-[9px] h-[16px] cursor-pointer"
        src={PrevImg}
        alt="prev"
      />
      <div className="flex items-center text-gray-001">
        <Link
          className="font-medium w-[35px] h-[35px] rounded-full bg-orange-001/[0.3] flex items-center justify-center"
          to="/"
        >
          1
        </Link>
        <Link
          className="w-[35px] h-[35px] flex items-center justify-center rounded-full"
          to="/"
        >
          2
        </Link>
        <Link
          className="w-[35px] h-[35px] flex items-center justify-center rounded-full"
          to="/"
        >
          3
        </Link>
        <Link
          className="w-[35px] h-[35px] flex items-center justify-center rounded-full"
          to="/"
        >
          4
        </Link>
        <Link
          className="w-[35px] h-[35px] flex items-center justify-center rounded-full"
          to="/"
        >
          5
        </Link>
      </div>
      <img
        className="w-[9px] h-[16px] cursor-pointer"
        src={NextImg}
        alt="next"
      />
    </div>
  );
};

export default Pagination;
