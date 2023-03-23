import React, { FC } from "react";
import { Link } from "react-router-dom";

const Categories: FC<ICategories> = ({ categories }) => {
  return (
    <ul className="text-gray-001 mt-3.5">
      {categories.map((el, index) => {
        return (
          <li key={index}>
            <Link to={el.to}>{el.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
