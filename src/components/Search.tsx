import React, { FC } from "react";
import SearchImg from "../assets/images/search.svg";

const Search: FC = () => {
  return (
    <div className="flex items-center justify-between p-2.5 pl-5 rounded-[36px] bg-gray-002">
      <input className="bg-[transparent] text-black-001 pr-2.5 w-full" type="text" placeholder="Поиск..." />
      <button className="min-w-[39px] w-[39px] h-[39px] rounded-full bg-orange-001 flex justify-center items-center">
        <img className="w-[18px] h-[18px]" src={SearchImg} alt="search" />
      </button>
    </div>
  );
};

export default Search;
