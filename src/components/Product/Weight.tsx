import React, { FC } from "react";
import WeightImg from "../../assets/images/product/weight.svg";

const Weight: FC = () => {
  return (
    <div className="flex items-center gap-2">
      <img className="w-[20px] h-[16px]" src={WeightImg} alt="weight" />
      <span className="inline-block text-xs text-gray-001">450 мл</span>
    </div>
  );
};

export default Weight;
