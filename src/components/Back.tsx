import React, { FC } from "react";
import { Link } from "react-router-dom";

const Back: FC = () => {
  return (
    <Link className="flex items-center gap-1" to="/">
      <div className="flex justify-center items-center bg-orange-001/[0.3] rounded-full w-[32px] h-[32px]">
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 1L1 5L5 9" stroke="#3F4E65" />
        </svg>
      </div>
      <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-001">
        Назад
      </span>
    </Link>
  );
};

export default Back;
