import React, { FC } from "react";
import Pagination from "../../Pagination";
import Product from "./Product";

const Products: FC = () => {
  return (
    <div className="mx-auto">
      <div className="grid grid-cols-1 min-[870px]:grid-cols-2 xl:grid-cols-3 gap-5">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <div className="flex justify-center mt-12">
        <Pagination />
      </div>
    </div>
  );
};

export default Products;
