import React, { FC } from "react";
import LocationImg from "../../../assets/images/location.svg";

const Location: FC = () => {
  return (
    <div className="flex items-center gap-5">
      <img src={LocationImg} alt="location" />
      <div className="flex flex-col leading-[18px] font-semibold text-black-001">
        <h6>г. Кокчетав, ул. Ж. Ташенова 129Б</h6>
        <p className="text-gray-001 font-normal">{`(Рынок Восточный)`}</p>
      </div>
    </div>
  );
};

export default Location;
