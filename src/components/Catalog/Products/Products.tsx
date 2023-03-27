import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setProductsList } from "../../../store/productsSlice";
import Pagination from "../../Pagination";
import Product from "./Product";
import productsData from "./products.json";

const Products: FC = () => {
  const dispatch = useAppDispatch();
  const products: IProduct[] =
    JSON.parse(localStorage.getItem("products")!) ||
    useAppSelector((state) => state.products.productsList);
  const currentPage = useAppSelector((state) => state.pagination.currentPage);
  const perProducts = useAppSelector((state) => state.pagination.perProducts);
  const totalPages = useAppSelector((state) => state.pagination.totalPages);
  const productsWrapper = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    dispatch(setProductsList(productsData));
  }, []);

  React.useEffect(() => {
    productsWrapper.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className="mx-auto w-full">
      <div
        className="grid grid-cols-1 min-[870px]:grid-cols-2 xl:grid-cols-3 gap-5"
        ref={productsWrapper}
      >
        {products
          .slice((currentPage - 1) * perProducts, currentPage * perProducts)
          .map((product) => {
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
        <div className={`${totalPages > 1 ? "flex" : "hidden"} justify-center mt-12`}>
          <Pagination />
        </div>
    </div>
  );
};

export default Products;
