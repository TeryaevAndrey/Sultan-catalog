import React, { FC } from "react";

const CategoriesSlider: FC<ICategories> = ({ categories }) => {
  return (
    <div className="overflow-x-hidden">
      <div className="flex items-center gap-2.5 overflow-x-auto py-1">
        {categories.map((el, index) => {
          return (
            <button
              key={index}
              className="px-6 py-[18px] bg-[white] text-gray-001 text-center rounded-[10px] shadow-[0px_15px_70px_-11px_rgba(43,28,1,0.04)] min-w-[100px]"
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
