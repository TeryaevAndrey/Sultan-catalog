import React, { FC } from "react";

const Counter: FC = () => {
  return (
    <div className="flex items-center">
      <button className="w-[34px] h-[23px] rounded-full bg-orange-001/[0.3] text-gray-001 flex justify-center items-center">
        -
      </button>
      <input
        className="text-center w-10 text-gray-001"
        type="text"
        placeholder="0"
      />
      <button className="w-[34px] h-[23px] rounded-full bg-orange-001/[0.3] text-gray-001 flex justify-center items-center">
        +
      </button>
    </div>
  );
};

export default Counter;
