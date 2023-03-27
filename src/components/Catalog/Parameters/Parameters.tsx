import React, { FC } from "react";
import ArrowTopImg from "../../../assets/images/arrow-top.svg";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setProductsList } from "../../../store/productsSlice";
import Delete from "../../Delete";
import Sort from "../../Sort";
import Categories from "./Categories/Categories";
import Manufacturers from "./Manufacturers/Manufacturers";
import Price from "./Price";
import productsData from "../Products/products.json";
import { setCurrentPage } from "../../../store/paginationSlice";

const Parameters: FC = () => {
  const dispatch = useAppDispatch();
  const priceBefore = useAppSelector((state) => state.parameters.priceBefore);
  const priceAfter = useAppSelector((state) => state.parameters.priceAfter);
  const manufacturersSelected = useAppSelector(
    (state) => state.parameters.manufacturersSelected
  );
  const products = useAppSelector((state) => state.products.productsList);
  const categories = useAppSelector((state) => state.categories.categoriesList);

  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturersSelected.length === 0 && !priceBefore && !priceAfter) {
      return dispatch(setProductsList(productsData));
    }

    const filteredProducts = products.filter((product) => {
      const productPrice = Math.floor(product.price);

      return (
        (manufacturersSelected.length === 0 ||
          manufacturersSelected.includes(product.parameters.manufacturer)) &&
        (!priceBefore || productPrice >= Number(priceBefore)) &&
        (!priceAfter || productPrice <= Number(priceAfter))
      );
    });

    dispatch(setCurrentPage(1));

    dispatch(setProductsList(filteredProducts));
  };

  return (
    <div className="flex flex-col w-full md:max-w-[240px]">
      <div className="flex items-center justify-between">
        <h3 className="uppercase text-base font-medium text-black-001">
          ПОДБОР ПО ПАРАМЕТРАМ
        </h3>
        <button className="flex justify-center items-center w-8 h-8 bg-orange-001/[0.5] rounded-full lg:hidden">
          <img
            className="w-[10px] h-[8px] rotate-180"
            src={ArrowTopImg}
            alt="open"
          />
        </button>
      </div>
      <form className="mt-4 lg:mt-2.5" onSubmit={formHandler}>
        <Price />
        <div className="mt-7">
          <Manufacturers />
        </div>
        <div className="mt-3.5 flex items-center gap-3">
          <button
            className="max-h-[59px] w-full bg-orange-001 rounded-[79px] py-5 px-[50px]"
            type="submit"
          >
            Показать
          </button>
          <Delete />
        </div>
      </form>
      <Categories categories={categories} />
      <div className="lg:hidden mt-6">
        <Sort />
      </div>
    </div>
  );
};

export default Parameters;
