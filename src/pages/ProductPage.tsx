import React, { FC } from "react";
import ProductImg from "../assets/images/products/product-2.png";
import WeightImg from "../assets/images/product/weight.svg";
import Crumbs from "../components/Crumbs";
import Counter from "../components/Product/Counter";
import ToCartBtn from "../components/ToCartBtn";
import Share from "../components/Share";

const ProductPage: FC = () => {
  return (
    <div>
      <div className="container">
        <Crumbs way={[{ title: "Продукт", to: "/asd" }]} />
        <div className="lg:flex items-start justify-between gap-10">
          <div className="w-full lg:w-[50%]">
            <img
              className="w-full object-contain"
              src={ProductImg}
              alt="product"
            />
          </div>
          <div className="flex flex-col w-full lg:w-[50%]">
            <p className="text-green-001 font-medium">В наличии</p>
            <h1 className="text-base lg:text-3xl text-black-001 mt-2.5">
              <span className="font-extrabold">BioMio BIO-SOAP</span>{" "}
              Экологичное туалетное мыло. Литсея и бергамот
            </h1>
            <div className="hidden md:flex items-center gap-1 mt-2.5">
              <img className="w-[20px] h-[14px]" src={WeightImg} alt="weight" />
              <p className="text-xs text-gray-001">90 г</p>
            </div>
            <div className="flex items-center flex-wrap gap-7 mt-5">
              <p className="font-extrabold text-xl text-black-001">48,76 ₸</p>
              <Counter />
              <div className="flex items-center justify-between gap-7">
                <ToCartBtn />
                <div className="lg:hidden">
                  <Share />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
