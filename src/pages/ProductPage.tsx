import React, { FC } from "react";
import ProductImg from "../assets/images/products/product-2.png";
import WeightImg from "../assets/images/product/weight.svg";
import Crumbs from "../components/Crumbs";
import Counter from "../components/Product/Counter";
import ToCartBtn from "../components/ToCartBtn";
import Share from "../components/Share";
import Characteristics from "../components/Characteristics";
import ArrowBottomImg from "../assets/images/sort-arrow.svg";
import Back from "../components/Back";

const ProductPage: FC = () => {
  return (
    <section className="pb-6">
      <div className="container">
        <div className="lg:hidden mb-5">
          <Back />
        </div>
        <Crumbs
          way={[
            { title: "Каталог", to: "/" },
            { title: "001230121211", to: "/" },
          ]}
        />
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
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-2.5 lg:mt-5">
              <div className="hidden lg:block">
                <Share />
              </div>

              <div className="p-5 bg-white shadow-sm rounded-[10px] text-center text-xs text-gray-001 mt-5 lg:mt-0 lg:max-w-[316px] lg:min-h-[77px]">
                <p>
                  При покупке от <span className="font-bold">10 000 ₸</span>{" "}
                  бесплатная доставка по Кокчетаву и области
                </p>
              </div>
              <a
                className="p-5 bg-white mt-2.5 lg:mt-0 lg:min-h-[77px] shadow-sm rounded-[10px] flex justify-center items-center gap-2.5 text-sm font-bold text-gray-001"
                href="#"
              >
                <span>Прайс-лист</span>
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.958 6.375H11.1247V2.125H6.87467V6.375H4.04134L8.99967 12.0417L13.958 6.375ZM3.33301 13.4583H14.6663V14.875H3.33301V13.4583Z"
                    fill="#3F4E65"
                  />
                </svg>
              </a>
            </div>
            <div className="mt-5">
              {/* <Characteristics /> */}
            </div>
            <div className="flex flex-col mt-2.5">
              <div className="border-b border-gray-001/[0.3] border-dotted py-5 flex items-center gap-1 text-base text-black-001 font-medium cursor-pointer">
                <span>Описание</span>
                <img src={ArrowBottomImg} alt="open" />
              </div>
              <div className="py-5 flex items-center gap-1 text-base text-black-001 font-medium cursor-pointer">
                <span>Характеристики</span>
                <img src={ArrowBottomImg} alt="open" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
