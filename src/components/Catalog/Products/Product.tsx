import React, { FC } from "react";
import ProductImg from "../../../assets/images/products/product-1.png";
import ToCartBtn from "../../ToCartBtn";
import Characteristics from "../../Characteristics";
import Weight from "../../Product/Weight";

const Product: FC = () => {
  return (
    <div className="w-full rounded-[10px] flex flex-col bg-[white] shadow-lg px-6 py-7 ease-linear duration-200 lg:hover:scale-[1.008]">
      <img
        className="max-h-[194px] object-contain"
        src={ProductImg}
        alt="product"
      />
      <div className="flex flex-col">
        <Weight />
        <p className="text-black-001 font-medium mt-2.5">
          <span className="font-bold text-base">Ariel</span> Автомат Гель СМС
          жидкое в растворимых капсулах Liquid Capsules Горный родник
        </p>
        <div className="mt-3.5">
          <Characteristics />
        </div>
      </div>
      <div className="flex items-center justify-between mt-3.5">
        <p className="text-black-001 font-extrabold text-base">48,76 ₸</p>
        <ToCartBtn />
      </div>
    </div>
  );
};

export default Product;
