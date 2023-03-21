import React, { FC } from "react";
import { Link } from "react-router-dom";
import ArrowTopImg from "../../../assets/images/arrow-top.svg";
import ClearImg from "../../../assets/images/clear.svg";
import Sort from "../../Sort";
import Categories from "./Categories/Categories";
import Manufactures from "./Manufactures";
import Price from "./Price";

const Parameters: FC = () => {
  return (
    <div className="flex flex-col w-full md:max-w-[240px]">
      <div className="flex items-center justify-between">
        <h3 className="uppercase text-base font-medium text-black-001">
          ПОДБОР ПО ПАРАМЕТРАМ
        </h3>
        <button className="flex justify-center items-center w-8 h-8 bg-orange-001/[0.5] rounded-full lg:hidden">
          <img
            className="w-[10px] h-[8px] rotate-180"
            src={ArrowTopImg}
            alt="open"
          />
        </button>
      </div>
      <form className="mt-4 lg:mt-2.5">
        <Price />
        <div className="mt-7">
          <Manufactures />
        </div>
        <div className="mt-3.5 flex items-center gap-3">
          <button
            className="max-h-[59px] w-full bg-orange-001 rounded-[79px] py-5 px-[50px]"
            type="submit"
          >
            Показать
          </button>
          <button className="max-h-[59px] bg-orange-001 rounded-full min-w-[59px] w-[59px] h-[59px] flex justify-center items-center">
            <img src={ClearImg} alt="clear" />
          </button>
        </div>
      </form>
      <Categories
        categories={[
          { title: "Уход за телом", to: "/" },
          { title: "Уход за руками", to: "/" },
        ]}
      />
      <div className="lg:hidden mt-6">
        <Sort />
      </div>
    </div>
  );
};

export default Parameters;
