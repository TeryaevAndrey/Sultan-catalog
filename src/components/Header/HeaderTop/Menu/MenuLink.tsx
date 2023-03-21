import React, { FC } from "react";
import { Link } from "react-router-dom";

interface IMenuLink {
  title: string;
  to: string;
}

const MenuLink: FC<IMenuLink> = ({ title, to }) => {
  return (
    <Link
      className="text-gray-001 relative [&:not(:last-child)]:after:content-[''] after:absolute after:hidden min-[1100px]:after:block after:-right-[30px] after:border-r after:border-dashed after:border-gray-001/[0.1] after:h-full after:top-[50%] after:translate-y-[-50%]"
      to={to}
    >
      {title}
    </Link>
  );
};

export default MenuLink;
