import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setProductsList } from "../../../store/productsSlice";
import Pagination from "../../Pagination";
import Product from "./Product";
import productsData from "./products.json";

const Products: FC = () => {
  const products = useAppSelector((state) => state.products.productsList);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(setProductsList(productsData));
  }, []);

  return (
    <div className="mx-auto">
      <div className="grid grid-cols-1 min-[870px]:grid-cols-2 xl:grid-cols-3 gap-5">
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              img={product.img}
              typeWeight={product.typeWeight}
              weightValue={product.weightValue}
              description={product.description}
              price={product.price}
              parameters={product.parameters}
            />
          );
        })}
      </div>
      <div className="flex justify-center mt-12">
        <Pagination />
      </div>
    </div>
  );
};

export default Products;
