import React, { FC } from "react";

const Categories: FC<ICategories> = ({ categories }) => {
  return (
    <ul className="text-gray-001 mt-3.5">
      {categories.map((el, index) => {
        return (
          <li key={index}>
            <button>{el}</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
