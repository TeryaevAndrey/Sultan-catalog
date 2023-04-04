import React, { FC } from "react";
import { setSort } from "../../../../store/catalogSlice";
import { setCategoriesSelected } from "../../../../store/categoriesSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";

const CategoriesSlider: FC<ICategories> = ({ categories }) => {
  const dispatch = useAppDispatch();
  const categoriesSelected = useAppSelector(
    (state) => state.categories.categoriesSelected
  );

  return (
    <div className="overflow-x-hidden">
      <div className="flex items-center gap-2.5 overflow-x-auto py-1">
        {categories.map((el, index) => {
          return (
            <button
              key={index}
              className={`px-6 py-[18px] ${
                categoriesSelected.includes(el)
                  ? "bg-[rgba(0,0,0,0.05)]"
                  : "bg-white"
              } ease-linear duration-75 text-gray-001 text-center rounded-[10px] shadow-[0px_15px_70px_-11px_rgba(43,28,1,0.04)] min-w-[100px]`}
              onClick={() => {
                if (categoriesSelected.includes(el)) {
                  dispatch(
                    setCategoriesSelected(
                      categoriesSelected.filter((category) => category !== el)
                    )
                  );
                } else {
                  dispatch(
                    setCategoriesSelected(
                      Array.from(new Set([...categoriesSelected, el]))
                    )
                  );
                }

                dispatch(setSort({ sortBy: "title", title: "Название" }));
              }}
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
