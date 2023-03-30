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
import {
  setPriceBefore,
  setPriceAfter,
  setSearchValue,
  setManufacturersSelected,
} from "../../../store/parametersSlice";

const Parameters: FC = () => {
  const dispatch = useAppDispatch();
  const priceBefore = useAppSelector((state) => state.parameters.priceBefore);
  const priceAfter = useAppSelector((state) => state.parameters.priceAfter);
  const manufacturersSelected = useAppSelector(
    (state) => state.parameters.manufacturersSelected
  );
  const products = useAppSelector((state) => state.products.productsList);
  const categories = useAppSelector((state) => state.categories.categoriesList);
  const categoriesSelected = useAppSelector(
    (state) => state.categories.categoriesSelected
  );
  const [isOpenParameters, setIsOpenParameters] = React.useState<boolean>(
    window.screen.width < 768 ? false : true
  );

  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacturersSelected.length === 0 && !priceBefore && !priceAfter) {
      if (categoriesSelected.length > 0) {
        const products: IProduct[] =
          JSON.parse(localStorage.getItem("products")!) || productsData;

        const filteredProductsByCategories = products.filter((product) => {
          return product.parameters.typeCare.some((item) =>
            categoriesSelected.includes(item)
          );
        });

        return dispatch(setProductsList(filteredProductsByCategories));
      } else {
        return dispatch(setProductsList(products));
      }
    }

    if (categoriesSelected.length > 0) {
      const products: IProduct[] =
        JSON.parse(localStorage.getItem("products")!) || productsData;

      const filteredProductsByCategories = products.filter((product) => {
        return product.parameters.typeCare.some((item) =>
          categoriesSelected.includes(item)
        );
      });

      const filteredProducts = filteredProductsByCategories.filter(
        (product) => {
          const productPrice = Math.floor(product.price);

          return (
            (manufacturersSelected.length === 0 ||
              manufacturersSelected.includes(
                product.parameters.manufacturer
              )) &&
            (!priceBefore || productPrice >= Number(priceBefore)) &&
            (!priceAfter || productPrice <= Number(priceAfter))
          );
        }
      );

      dispatch(setProductsList(filteredProducts));
    } else {
      const products: IProduct[] =
        JSON.parse(localStorage.getItem("products")!) || productsData;

      const filteredProducts = products.filter((product) => {
        const productPrice = Math.floor(product.price);

        return (
          (manufacturersSelected.length === 0 ||
            manufacturersSelected.includes(product.parameters.manufacturer)) &&
          (!priceBefore || productPrice >= Number(priceBefore)) &&
          (!priceAfter || productPrice <= Number(priceAfter))
        );
      });

      dispatch(setProductsList(filteredProducts));
    }

    dispatch(setCurrentPage(1));
  };

  const clearParameters = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    dispatch(setPriceBefore(""));
    dispatch(setPriceAfter(""));
    dispatch(setSearchValue(""));
    dispatch(setManufacturersSelected([]));

    return dispatch(setProductsList(productsData));
  };

  return (
    <div className="flex flex-col w-full md:max-w-[240px]">
      <div className="flex items-center justify-between">
        <h3 className="uppercase text-base font-medium text-black-001">
          ПОДБОР ПО ПАРАМЕТРАМ
        </h3>
        <button className="flex justify-center items-center w-8 h-8 bg-orange-001/[0.5] rounded-full lg:hidden">
          <img
            className={`w-[10px] h-[8px] ${
              isOpenParameters ? "" : "rotate-180"
            }`}
            src={ArrowTopImg}
            alt="open"
            onClick={() => setIsOpenParameters(!isOpenParameters)}
          />
        </button>
      </div>
      <form
        className={`mt-4 lg:mt-2.5 ${isOpenParameters ? "block" : "hidden"}`}
        onSubmit={formHandler}
      >
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
          <Delete onClick={clearParameters} />
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
