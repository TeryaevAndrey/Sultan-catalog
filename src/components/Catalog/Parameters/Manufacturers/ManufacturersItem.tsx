import React, { FC } from "react";
import productsData from "../../Products/products.json";

interface IManufacturersItem {
  manufacturer: string;
  onChange: React.ChangeEventHandler;
  checked: boolean;
  value: string;
}

const ManufacturersItem: FC<IManufacturersItem> = ({
  manufacturer,
  onChange,
  checked,
  value,
}) => {
  const products: IProduct[] =
    JSON.parse(localStorage.getItem("products")!) || productsData;

  return (
    <div className="flex items-center gap-2 relative">
      <input
        className="parameter-checkbox opacity-0"
        type="checkbox"
        name="manufacturer"
        id={manufacturer}
        onChange={onChange}
        checked={checked}
        value={value}
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
