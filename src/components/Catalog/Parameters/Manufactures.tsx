import React, { FC } from "react";
import Search from "../../Search";
import SortArrowImg from "../../../assets/images/sort-arrow.svg";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setSearchValue } from "../../../store/parametersSlice";

const Manufactures: FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.productsList);
  const searchValue = useAppSelector((state) => state.parameters.searchValue);
  const [searchManufacturers, setSearchManufacturers] = React.useState<
    string[]
  >([]);
  const manufacturers = Array.from(
    new Set(products.map((product) => product.parameters.manufacturer))
  );

  const changeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.target.value));

    if(e.target.value === "") {
      setSearchManufacturers([]);
    }
  };

  const searchBtnHandler = (e: React.MouseEvent) => {
    e.preventDefault();

    if (searchValue) {
      const manufacturersFiltered = manufacturers.filter((manufacturer) =>
        manufacturer.toLowerCase().includes(searchValue.toLowerCase())
      );

      return setSearchManufacturers(manufacturersFiltered);
    }
  };

  return (
    <div className="flex flex-col pb-5 border-b border-dotted border-gray-001/[0.1]">
      <h5 className="text-base font-medium text-black-001">Производитель</h5>
      <div className="mt-3.5 w-full">
        <Search
          onChange={changeSearchValue}
          value={searchValue}
          onClick={searchBtnHandler}
        />
      </div>
      <div className="mt-3.5 flex flex-col">
        {searchManufacturers.length > 0
          ? searchManufacturers.map((manufacturer, index) => {
              return (
                <div className="flex items-center gap-2 relative" key={index}>
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
                          (product) =>
                            product.parameters.manufacturer === manufacturer
                        ).length
                      }
                      )
                    </span>
                  </label>
                </div>
              );
            })
          : manufacturers.slice(0, 4).map((manufacturer, index) => {
              return (
                <div className="flex items-center gap-2 relative" key={index}>
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
                          (product) =>
                            product.parameters.manufacturer === manufacturer
                        ).length
                      }
                      )
                    </span>
                  </label>
                </div>
              );
            })}

        <div className="mt-3.5 flex items-center gap-2 text-gray-001 text-xs font-medium cursor-pointer">
          <span>Показать все</span>
          <img src={SortArrowImg} alt="open" />
        </div>
      </div>
    </div>
  );
};

export default Manufactures;
