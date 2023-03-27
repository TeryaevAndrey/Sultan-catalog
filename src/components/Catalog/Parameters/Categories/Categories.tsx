import React, { FC } from "react";
import { setCurrentCategory } from "../../../../store/categoriesSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";

const Categories: FC<ICategories> = ({ categories }) => {
  const dispatch = useAppDispatch();
  const currentCategory = useAppSelector(
    (state) => state.categories.currentCategory
  );

  return (
    <ul className="text-gray-001 mt-3.5">
      {categories.map((el, index) => {
        return (
          <li
            className={`hover:text-black-001 ${currentCategory === index ? "text-black-001" : "text-gray-001"} ease-linear duration-75`}
            key={index}
            onClick={() => {
              dispatch(setCurrentCategory(index))
            }}
          >
            {el}
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
