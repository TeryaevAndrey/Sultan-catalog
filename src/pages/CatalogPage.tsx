import React, { FC } from "react";
import CategoriesSlider from "../components/Catalog/CategoriesSlider";
import Parameters from "../components/Catalog/Parameters/Parameters";
import Products from "../components/Catalog/Products/Products";
import Tabs from "../components/Catalog/Tabs/Tabs";
import Crumbs from "../components/Crumbs";
import Sort from "../components/Sort";
import Title from "../components/Title";
import productsData from "../components/Catalog/Products/products.json";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setCategories } from "../store/categoriesSlice";
import { setProductsList } from "../store/productsSlice";

const CatalogPage: FC = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.categories.categoriesList);
  const categoriesSelected = useAppSelector(
    (state) => state.categories.categoriesSelected
  );
  const priceBefore = useAppSelector((state) => state.parameters.priceBefore);
  const priceAfter = useAppSelector((state) => state.parameters.priceAfter);
  const manufacturersSelected = useAppSelector(
    (state) => state.parameters.manufacturersSelected
  );
  const products: IProduct[] =
    JSON.parse(localStorage.getItem("products")!) || productsData;

  React.useEffect(() => {
    const categories: string[] = [];
    const products: IProduct[] =
      JSON.parse(localStorage.getItem("products")!) || productsData;

    products.forEach((product) => {
      categories.push(...product.parameters.typeCare);
    });

    dispatch(setCategories(Array.from(new Set(categories))));
  }, []);

  React.useEffect(() => {
    if (categoriesSelected.length === 0) {
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
    } else {
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
    }
  }, [categoriesSelected]);

  return (
    <section>
      <Tabs />
      <div className="container">
        <Crumbs way={[{ title: "Косметика и гигиена", to: "/" }]} />
        <div className="mt-6 lg:mt-0 flex items=center justify-between">
          <Title title="Косметика и гигиена" />
          <div className="hidden md:block">
            <Sort />
          </div>
        </div>
        <div className="mt-5">
          <CategoriesSlider categories={categories} />
        </div>
        <div className="flex items-start justify-between flex-wrap md:flex-nowrap pb-12 lg:pb-24 gap-12 lg:gap-24 mt-5">
          <Parameters />
          <Products />
        </div>
      </div>
    </section>
  );
};

export default CatalogPage;
