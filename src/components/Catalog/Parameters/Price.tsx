import React, { FC } from "react";

const Price: FC = () => {
  return (
    <div className="flex flex-col">
      <h6 className="font-light text-gray-001">
        Цена <span className="text-black-001 font-medium">₸</span>
      </h6>

      <div className="flex items-center gap-5 lg:justify-between mt-4 text-gray-001">
        <input
          className="w-full py-1 px-7 bg-orange-linear-001 text-gray-001 text-center text-xs font-light rounded-full"
          type="text"
          placeholder="0"
        />
        <div>-</div>
        <input
          className="w-full py-1 px-7 bg-orange-linear-001 text-gray-001 text-center text-xs font-light rounded-full"
          type="text"
          placeholder="10000"
        />
      </div>
    </div>
  );
};

export default Price;
