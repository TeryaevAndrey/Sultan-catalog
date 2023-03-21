import React, { FC } from "react";
import ArrowRight from "../../assets/images/arrow-right.svg";

const EmailField: FC = () => {
  return (
    <div className="min-h-[59px] bg-[white] py-2.5 px-2.5 pl-5 rounded-[36px] flex justify-between items-center w-full max-w-[282px]">
      <input
        className="bg-[transparent] pr-2.5 text-black-001 placeholder:text-xs placeholder:text-gray-001 text-sm"
        type="text"
        placeholder="Введите ваш E-mail"
      />
      <button className="flex items-center justify-center bg-orange-001 w-[39px] h-[39px] rounded-full py-3 px-3.5">
        <img className="w-[8px] h-[15px]" src={ArrowRight} alt="go" />
      </button>
    </div>
  );
};

export default EmailField;
