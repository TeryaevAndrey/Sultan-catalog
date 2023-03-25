import React, { FC } from "react";
import ArrowTopImg from "../../../assets/images/arrow-top.svg";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setProductsList, setProductsListFiltered } from "../../../store/productsSlice";
import Delete from "../../Delete";
import Sort from "../../Sort";
import Categories from "./Categories/Categories";
import Manufactures from "./Manufacturers/Manufactures";
import Price from "./Price";
import productsData from "../../Catalog/Products/products.json";

const Parameters: FC = () => {
  const dispatch = useAppDispatch();
  const priceBefore = useAppSelector((state) => state.parameters.priceBefore);
  const priceAfter = useAppSelector((state) => state.parameters.priceAfter);
  const manufacturersSelected = useAppSelector(
    (state) => state.parameters.manufacturersSelected
  );
  const products = useAppSelector((state) => state.products.productsList);

  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const filteredProducts = products.filter((product) => {
      const productPrice = Math.round(product.price);

      if (priceBefore && priceAfter) {
        return (
          productPrice >= Number(priceBefore) &&
          productPrice <= Number(priceAfter)
        );
      }

      if (priceBefore) {
        return productPrice >= Number(priceBefore);
      }

      if (priceAfter) {
        return productPrice <= Number(priceAfter);
      }

      return true;
    });

    dispatch(setProductsListFiltered(filteredProducts));
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
          <Manufactures />
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
      <Categories
        categories={[
          { title: "Уход за телом", to: "/" },
          { title: "Уход за руками", to: "/" },
        ]}
      />
      <div className="lg:hidden mt-6">
        <Sort />
      </div>
    </div>
  );
};

export default Parameters;
