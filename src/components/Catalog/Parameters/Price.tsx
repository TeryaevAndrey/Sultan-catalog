import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setPriceAfter, setPriceBefore } from "../../../store/parametersSlice";

const Price: FC = () => {
  const dispatch = useAppDispatch();
  const priceBefore = useAppSelector((state) => state.parameters.priceBefore);
  const priceAfter = useAppSelector((state) => state.parameters.priceAfter);

  const changePriceBefore = (e: React.ChangeEvent<HTMLInputElement>) => {
    return dispatch(setPriceBefore(e.target.value));
  };

  const changePriceAfter = (e: React.ChangeEvent<HTMLInputElement>) => {
    return dispatch(setPriceAfter(e.target.value));
  };

  return (
    <div className="flex flex-col">
      <h6 className="font-light text-gray-001">
        Цена <span className="text-black-001 font-medium">₸</span>
      </h6>

      <div className="flex items-center gap-5 lg:justify-between mt-4 text-gray-001">
        <input
          className="w-full py-1 px-7 bg-orange-linear-001 text-gray-001 text-center text-xs font-light rounded-full"
          type="number"
          placeholder="от"
          onChange={changePriceBefore}
          value={priceBefore}
        />
        <div>-</div>
        <input
          className="w-full py-1 px-7 bg-orange-linear-001 text-gray-001 text-center text-xs font-light rounded-full"
          type="number"
          placeholder="до"
          onChange={changePriceAfter}
          value={priceAfter}
        />
      </div>
    </div>
  );
};

export default Price;
