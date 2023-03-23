import React, { FC } from "react";
import SortImg from "../assets/images/sort-arrow.svg";

const Sort: FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <div className="relative w-max">
      <p className="font-medium text-black-001 text-base flex items-center gap-2">
        Сортировка:
        <span
          className="flex items-center gap-1 font-normal text-gray-001 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          Название
          <img className="w-[7px] h-[7px]" src={SortImg} alt="sort" />
        </span>
      </p>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-[100%] right-0 bg-white shadow-sm text-gray-001`}
      >
        <div className="cursor-pointer p-1 border-b border-gray-001/[0.3] border-solid hover:bg-gray-001/[0.1]">
          Цена
        </div>
        <div className="cursor-pointer p-1 border-b border-gray-001/[0.3] border-solid hover:bg-gray-001/[0.1]">
          Название
        </div>
        <div className="cursor-pointer p-1 border-b border-gray-001/[0.3] border-solid hover:bg-gray-001/[0.1]">
          По убыванию
        </div>
        <div className="cursor-pointer p-1 hover:bg-gray-001/[0.1]">
          По возрастанию
        </div>
      </div>
    </div>
  );
};

export default Sort;
