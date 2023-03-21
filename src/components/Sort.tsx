import React, { FC } from "react";
import SortImg from "../assets/images/sort-arrow.svg";

const Sort: FC = () => {
  return (
    <div className="relative">
      <p className="font-medium text-black-001 text-base flex items-center gap-2">
        Сортировка:
        <span className="flex items-center gap-1 font-normal text-gray-001 cursor-pointer">
          Название
          <img className="w-[7px] h-[7px]" src={SortImg} alt="sort" />
        </span>
      </p>
    </div>
  );
};

export default Sort;
