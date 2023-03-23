import React, { FC } from "react";
import Search from "../../Search";
import SortArrowImg from "../../../assets/images/sort-arrow.svg";

const Manufactures: FC = () => {
  return (
    <div className="flex flex-col pb-5 border-b border-dotted border-gray-001/[0.1]">
      <h5 className="text-base font-medium text-black-001">Производитель</h5>
      <div className="mt-3.5 w-full">
        <Search />
      </div>
      <div className="mt-3.5 flex flex-col">
        <div className="flex items-center gap-2 relative">
          <input
            className="parameter-checkbox opacity-0"
            type="checkbox"
            name="man"
            id="man1"
          />
          <label
            className="flex items-center gap-1 text-gray-001 cursor-pointer before:content-[''] before:absolute before:left-0 before:w-[10px] before:h-[10px] before:border before:border-gray-001 before:border-solid"
            htmlFor="man1"
          >
            Grifon <span className="text-[10px] leading-none">(56)</span>
          </label>
        </div>
        <div className="flex items-center gap-2 relative">
          <input
            className="parameter-checkbox opacity-0"
            type="checkbox"
            name="man"
            id="man2"
          />
          <label
            className="flex items-center gap-1 text-gray-001 cursor-pointer before:content-[''] before:absolute before:left-0 before:w-[10px] before:h-[10px] before:border before:border-gray-001 before:border-solid"
            htmlFor="man2"
          >
            Grifon <span className="text-[10px] leading-none">(56)</span>
          </label>
        </div>

        <div className="mt-3.5 flex items-center gap-2 text-gray-001 text-xs font-medium cursor-pointer">
          <span>Показать все</span>
          <img src={SortArrowImg} alt="open" />
        </div>
      </div>
    </div>
  );
};

export default Manufactures;
