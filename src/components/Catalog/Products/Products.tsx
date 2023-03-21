import React, { FC } from "react";
import Product from "./Product";

const Products: FC = () => {
  return (
    <div>
      <div className="grid grid-cols-1 min-[870px]:grid-cols-2 xl:grid-cols-3 gap-5">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Products;
