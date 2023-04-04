import React, { FC } from "react";
import WeightImg from "../assets/images/product/weight.svg";
import VolumeImg from "../assets/images/volume.svg";

interface IWeight {
  type: string;
  value: number | undefined;
}

const Weight: FC<IWeight> = ({ type, value }) => {
  return (
    <div className="flex items-center gap-2">
      <img
        className="w-[20px] h-[16px]"
        src={type === "volume" ? VolumeImg : WeightImg}
        alt="weight"
      />
      <span className="inline-block text-xs text-gray-001">
        {value} {type === "volume" ? "мл" : "г"}
      </span>
    </div>
  );
};

export default Weight;
