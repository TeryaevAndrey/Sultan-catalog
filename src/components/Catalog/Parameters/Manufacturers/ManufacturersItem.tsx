import React, { FC } from "react";
import { useAppSelector } from "../../../../store/hooks";

interface IManufacturersItem {
  manufacturer: string;
}

const ManufacturersItem: FC<IManufacturersItem> = ({ manufacturer }) => {
  const products = useAppSelector((state) => state.products.productsList);

  return (
    <div className="flex items-center gap-2 relative">
      <input
        className="parameter-checkbox opacity-0"
        type="checkbox"
        name="manufacturer"
        id={manufacturer}
      />
      <label
        className="flex items-center gap-1 text-gray-001 cursor-pointer before:content-[''] before:absolute before:left-0 before:w-[10px] before:h-[10px] before:border before:border-gray-001 before:border-solid"
        htmlFor={manufacturer}
      >
        {manufacturer}{" "}
        <span className="text-[10px] leading-none">
          (
          {
            products.filter(
              (product) => product.parameters.manufacturer === manufacturer
            ).length
          }
          )
        </span>
      </label>
    </div>
  );
};

export default ManufacturersItem;
