import React, { FC } from "react";
import LogoImg from "../../assets/images/logo-white.svg";
import VisaImg from "../../assets/images/pay/visa.svg";
import MasterCardImg from "../../assets/images/pay/mastercard.svg";
import PriceList from "../PriceList";
import EmailField from "./EmailField";
import FooterMob from "./FooterMob";
import Socials from "../Socials";

const Footer: FC = () => {
  return (
    <>
      <FooterMob />
      <div className="hidden lg:flex bg-gray-001 py-16">
        <div className="container">
          <div className="flex items-start justify-between gap-x-3">
            <div className="flex flex-col max-w-[320px] w-full">
              <a className="w-[156px] h-[66px]" href="#">
                <img className="w-full h-full" src={LogoImg} alt="Султан" />
              </a>
              <p className="mt-3.5 text-base">
                Компания «Султан» — снабжаем розничные магазины товарами "под
                ключ" в Кокчетаве и Акмолинской области
              </p>
              <form className="mt-11 flex flex-col gap-3.5">
                <p className="text-xs">Подпишись на скидки и акции</p>
                <EmailField />
              </form>
            </div>
            <div className="flex items-start justify-between flex-wrap w-full gap-5 gap-y-10 max-w-[983px]">
              <ul className="text-xs flex flex-col gap-5">
                <li className="text-xl font-semibold">Меню сайта:</li>
                <li>
                  <a href="#">О компании</a>
                </li>
                <li>
                  <a href="#">Доставка и оплата</a>
                </li>
                <li>
                  <a href="#">Возврат</a>
                </li>
                <li>
                  <a href="#">Контакты</a>
                </li>
              </ul>
              <ul className="text-xs flex flex-col gap-5">
                <li className="text-xl font-semibold">Категории:</li>
                <li>
                  <a href="#">Бытовая химия</a>
                </li>
                <li>
                  <a href="#">Косметика и гигиена</a>
                </li>
                <li>
                  <a href="#">Товары для дома</a>
                </li>
                <li>
                  <a href="#">Товары для детей и мам</a>
                </li>
                <li>
                  <a href="#">Посуда</a>
                </li>
              </ul>
              <div className="flex flex-col gap-5">
                <h6 className="text-xl font-semibold">Скачать прайс-лист:</h6>
                <PriceList />
                <Socials />
              </div>
              <div className="flex flex-col">
                <h6 className="text-xl font-semibold">Контакты:</h6>
                <div className="flex items-start justify-between mt-6">
                  <div className="flex flex-col leading-none gap-2">
                    <a className="font-semibold" href="tel:+77774900091">
                      +7 (777) 490-00-91
                    </a>
                    <p className=" text-sm font-light">
                      время работ: 9:00-20:00
                    </p>
                    <a
                      className="text-[10px] border-b border-white border-solid w-max"
                      href="#"
                    >
                      Заказать звонок
                    </a>
                  </div>
                </div>
                <div className="mt-6">
                  <a className="font-semibold text-sm" href="#">
                    opt.sultan@mail.ru
                  </a>
                  <p className="text-xs font-light">На связи в любое время</p>
                </div>
                <div className="flex items-center gap-1 mt-2.5">
                  <img className="w-[61px] h-[39px]" src={VisaImg} alt="visa" />
                  <img
                    className="w-[61px] h-[39px]"
                    src={MasterCardImg}
                    alt="mastercard"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
