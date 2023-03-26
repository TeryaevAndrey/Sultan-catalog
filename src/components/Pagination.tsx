import React, { FC } from "react";
import PrevImg from "../assets/images/prev.svg";
import NextImg from "../assets/images/next.svg";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setCurrentPage, setTotalPages } from "../store/paginationSlice";

const Pagination: FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.productsList);
  const totalPages = useAppSelector((state) => state.pagination.totalPages);
  const currentPage = useAppSelector((state) => state.pagination.currentPage);
  const pages: number[] = [];

  React.useEffect(() => {
    dispatch(setTotalPages(Math.ceil(products.length / 9)));
  }, [products]);

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const changeCurrentPage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <div className="flex items-center gap-8">
      <img
        className="w-[9px] h-[16px] cursor-pointer"
        src={PrevImg}
        alt="prev"
      />
      <div className="flex items-center text-gray-001">
        {pages.map((page) => {
          return (
            <Link
              className={`font-medium w-[35px] h-[35px] rounded-full ${
                currentPage === page ? "bg-orange-001/[0.3]" : "bg-white"
              } flex items-center justify-center`}
              to="/"
              onClick={() => changeCurrentPage(page)}
            >
              {page}
            </Link>
          );
        })}
      </div>
      <img
        className="w-[9px] h-[16px] cursor-pointer"
        src={NextImg}
        alt="next"
      />
    </div>
  );
};

export default Pagination;
