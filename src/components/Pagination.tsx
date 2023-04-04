import React, { FC } from "react";
import PrevImg from "../assets/images/prev.svg";
import NextImg from "../assets/images/next.svg";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setCurrentPage, setTotalPages } from "../store/paginationSlice";

const Pagination: FC = () => {
  const dispatch = useAppDispatch();
  const products =
    useAppSelector((state) => state.products.productsList) ||
    JSON.parse(localStorage.getItem("products")!);
  const totalPages = useAppSelector((state) => state.pagination.totalPages);
  const currentPage = useAppSelector((state) => state.pagination.currentPage);
  const pages: number[] = [];
  const perProducts = useAppSelector((state) => state.pagination.perProducts);

  React.useEffect(() => {
    dispatch(setTotalPages(Math.ceil(products.length / perProducts)));
  }, [products]);

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const changeCurrentPage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const prevPage = () => {
    dispatch(setCurrentPage(currentPage - 1));
  };

  const nextPage = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };

  return (
    <div className="flex items-center gap-8">
      <img
        className="w-[9px] h-[16px] cursor-pointer"
        src={PrevImg}
        alt="prev"
        onClick={prevPage}
      />
      <div className="flex items-center text-gray-001">
        {pages.map((page, index) => {
          return (
            <div
              key={index}
              className={`font-medium w-[35px] h-[35px] rounded-full ${
                currentPage === page ? "bg-orange-001/[0.3]" : "bg-white"
              } flex items-center justify-center cursor-pointer`}
              onClick={() => changeCurrentPage(page)}
            >
              {page % 5 === 0 ? page++ : page}
            </div>
          );
        })}
      </div>
      <img
        className="w-[9px] h-[16px] cursor-pointer"
        src={NextImg}
        alt="next"
        onClick={nextPage}
      />
    </div>
  );
};

export default Pagination;
