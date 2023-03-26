import React, { FC } from "react";
import CategoriesSlider from "../components/Catalog/CategoriesSlider";
import Parameters from "../components/Catalog/Parameters/Parameters";
import Product from "../components/Catalog/Products/Product";
import Products from "../components/Catalog/Products/Products";
import Tabs from "../components/Catalog/Tabs/Tabs";
import Crumbs from "../components/Crumbs";
import Sort from "../components/Sort";
import Title from "../components/Title";
import productsData from "../components/Catalog/Products/products.json";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setCategories } from "../store/categoriesSlice";

const CatalogPage: FC = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.categories.categoriesList);

  React.useEffect(() => {
    const categories: string[] = [];

    productsData.forEach((product) => {
      categories.push(...product.parameters.typeCare);
    });

    dispatch(setCategories(Array.from(new Set(categories))));
  }, []);

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
