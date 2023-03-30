import React, { FC } from "react";
import Product from "../components/Catalog/Products/Product";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setProductsList } from "../store/productsSlice";
import productsData from "../components/Catalog/Products/products.json";
import Pagination from "../components/Pagination";
import ProductAdmin from "../components/Catalog/Products/ProductAdmin";
import { useNavigate } from "react-router-dom";

const AdminPage: FC = () => {
  const products: IProduct[] = useAppSelector(
    (state) => state.products.productsList
  );
  const currentPage = useAppSelector((state) => state.pagination.currentPage);
  const perProducts = useAppSelector((state) => state.pagination.perProducts);
  const totalPages = useAppSelector((state) => state.pagination.totalPages);
  const productsWrapper = React.useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    productsWrapper.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentPage]);

  React.useEffect(() => {
    dispatch(
      setProductsList(
        JSON.parse(localStorage.getItem("products")!) || productsData
      )
    );
  }, []);

  const deleteProduct = (id: string | number) => {
    localStorage.setItem(
      "products",
      JSON.stringify(products.filter((product) => product.id !== id))
    );

    dispatch(setProductsList(products.filter((product) => product.id !== id)));
  };

  return (
    <div className="py-12 lg:py-24">
      <div className="container">
        <button
          className="bg-orange-001 px-3 py-2 rounded-[30px]"
          onClick={() => navigate("/admin/add")}
        >
          Добавить товар
        </button>

        <div
          className="grid grid-cols-1 min-[870px]:grid-cols-2 xl:grid-cols-3 gap-5 mt-5"
          ref={productsWrapper}
        >
          {products
            .slice((currentPage - 1) * perProducts, currentPage * perProducts)
            .map((product) => {
              return (
                <ProductAdmin
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  img={product.img}
                  typeWeight={product.typeWeight}
                  weightValue={product.weightValue}
                  description={product.description}
                  price={product.price}
                  parameters={product.parameters}
                  deleteProduct={() => deleteProduct(product.id)}
                />
              );
            })}
        </div>
        <div
          className={`${
            totalPages > 1 ? "flex" : "hidden"
          } justify-center mt-12`}
        >
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
