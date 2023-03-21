import React, { FC } from "react";
import CatalogImg from "../../assets/images/catalog.svg";

const CatalogBtn: FC = () => {
  return (
    <button className="rounded-[80px] bg-orange-001 text-white flex items-center gap-3 py-[22px] px-[55px] font-bold max-h-[59px]">
      Каталог
      <img
        className="w-[15px] h-[15px] hidden min-[1100px]:block"
        src={CatalogImg}
        alt="catalog"
      />
    </button>
  );
};

export default CatalogBtn;
