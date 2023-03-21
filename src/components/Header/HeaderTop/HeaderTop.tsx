import React, { FC } from "react";
import Contact from "./Contact";
import Location from "./Location";
import Menu from "./Menu/Menu";

const HeaderTop: FC = () => {
  return (
    <div className="w-full py-3.5">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-5 min-[1100px]:gap-10">
            <Location />
            <Contact />
          </div>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
