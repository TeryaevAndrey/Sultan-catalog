import React, { FC } from "react";
import LogoImg from "../../assets/images/logo.svg";
import CartImg from "../../assets/images/cart.svg";
import BurgerImg from "../../assets/images/burger.png";
import HeaderTop from "./HeaderTop/HeaderTop";
import ManagerImg from "../../assets/images/manager.png";
import { Link } from "react-router-dom";
import CatalogBtn from "./CatalogBtn";
import Search from "../Search";
import PriceList from "../PriceList";
import Cart from "./Cart";

const Header: FC = () => {
  return (
    <>
      <header className="flex lg:hidden py-3.5">
        <div className="container">
          <div className="flex justify-between items-center">
            <img
              className="w-8 h-8 cursor-pointer"
              src={BurgerImg}
              alt="menu"
            />
            <Link className="w-24 h-10 overflow-hidden" to="#">
              <img className="w-full h-full" src={LogoImg} alt="Султан" />
            </Link>
            <div className="relative cursor-pointer">
              <img className="w-6 h-6" src={CartImg} alt="cart" />
              <div className="flex justify-center items-center absolute w-5 h-5 -top-[6px] -right-[6px] bg-orange-001 rounded-full border-[3px] border-white border-solid">
                <span className="font-bold text-[10px] text-white">3</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="hidden lg:block">
          <HeaderTop />
          <div className="py-5 border-gray-001/[0.1] border-y border-solid">
            <div className="container">
                <div className="flex justify-between items-center gap-2.5">
                    <Link className="w-[156px] h-[66px] overflow-hidden" to="#">
                        <img className="w-full h-full" src={LogoImg} alt="Султан" />
                    </Link>
                    <CatalogBtn />
                    <Search />
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col gap-1 text-right">
                        <a className="text-black-001 font-semibold" href="tel:+77774900091">+7 (777) 490-00-91</a>
                        <p className="text-gray-001 text-sm font-light">время работы: 9:00-20:00</p>
                        <a className="text-gray-001 text-[10px] border-b border-gray-001 border-solid w-max ml-auto" href="#">Заказать звонок</a>
                      </div>
                      <img className="rounded-[40px]" src={ManagerImg} alt="manager" />
                    </div>
                    <div className="hidden min-[1100px]:block">
                    <PriceList />
                    </div>
                    <Cart />
                </div>
            </div>
          </div>
      </header>
    </>
  );
};

export default Header;
