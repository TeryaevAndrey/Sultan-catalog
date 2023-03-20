import React, { FC } from "react";
import DownloadImg from "../assets/images/download.svg";

const PriceList: FC = () => {
  return (
    <a
      className="rounded-[80px] bg-orange-001 text-white flex items-center gap-3 py-[22px] px-[43px] font-bold max-h-[59px]"
      href="#"
    >
      Прайс-лист
      <img className="w-[17px] h-[17px]" src={DownloadImg} alt="catalog" />
    </a>
  );
};

export default PriceList;
