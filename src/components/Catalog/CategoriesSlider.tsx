import React, { FC } from "react";
import { setCurrentCategory } from "../../store/categoriesSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const CategoriesSlider: FC<ICategories> = ({ categories }) => {
  const dispatch = useAppDispatch();
  const currentCategory = useAppSelector(
    (state) => state.categories.currentCategory
  );

  return (
    <div className="overflow-x-hidden">
      <div className="flex items-center gap-2.5 overflow-x-auto py-1">
        {categories.map((el, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                dispatch(setCurrentCategory(index));
              }}
              className={`px-6 py-[18px] ${currentCategory === index ? "bg-[rgba(0,0,0,0.05)]" : "bg-white"} hover:bg-[rgba(0,0,0,0.05)] ease-linear duration-75 text-gray-001 text-center rounded-[10px] shadow-[0px_15px_70px_-11px_rgba(43,28,1,0.04)] min-w-[100px]`}
            >
              {el}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesSlider;
