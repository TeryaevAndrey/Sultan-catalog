import React, { FC } from "react";
import { Link } from "react-router-dom";

interface IWay {
  title: string;
  to: string;
}

interface ICrumbs {
  way: IWay[];
}

const Crumbs: FC<ICrumbs> = ({ way }) => {
  return (
    <div className="hidden lg:flex items-center gap-5 text-sm font-light text-gray-001 py-11">
      <Link
        className="inline-block relative after:content-[''] after:absolute after:hidden min-[1100px]:after:block after:-right-[10px] after:border-r after:border-dashed after:border-gray-001/[0.1] after:h-full after:top-[50%] after:translate-y-[-50%]"
        to="/"
      >
        Главная
      </Link>
      {way.map((el) => {
        return (
          <Link
            className="opacity-[0.5] relative hover:opacity-[1] [&:not(:last-child)]:after:content-[''] after:absolute after:hidden min-[1100px]:after:block after:-right-[10px] after:border-r after:border-dashed after:border-gray-001/[0.1] after:h-full after:top-[50%] after:translate-y-[-50%]"
            to={el.to}
          >
            {el.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Crumbs;
