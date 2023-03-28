import React, { FC } from "react";

interface ICounter {
  reduceAmount: React.MouseEventHandler;
  increaseAmount: React.MouseEventHandler;
  onChange: React.ChangeEventHandler;
  amount: number;
}

const Counter: FC<ICounter> = ({
  reduceAmount,
  increaseAmount,
  onChange,
  amount,
}) => {
  return (
    <div className="flex items-center">
      <button
        onClick={reduceAmount}
        className="w-[34px] h-[23px] rounded-full bg-orange-001/[0.3] text-gray-001 flex justify-center items-center"
      >
        -
      </button>
      <input
        className="text-center w-10 text-gray-001"
        type="number"
        placeholder="0"
        value={amount}
        onChange={onChange}
      />
      <button
        onClick={increaseAmount}
        className="w-[34px] h-[23px] rounded-full bg-orange-001/[0.3] text-gray-001 flex justify-center items-center"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
