import React, { FC } from "react";
import LogoImg from "../../assets/images/logo-white.svg";
import WhatsappImg from "../../assets/images/socials/whatsapp.svg";
import TelegramImg from "../../assets/images/socials/telegram.svg";
import VisaImg from "../../assets/images/pay/visa.svg";
import MasterCardImg from "../../assets/images/pay/mastercard.svg";
import PriceList from "../PriceList";
import EmailField from "./EmailField";
import Socials from "../Socials";

const FooterMob: FC = () => {
  return (
    <div className="py-3.5 bg-gray-001 flex lg:hidden">
      <div className="container">
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <a className="w-[97px] h-[47px]" href="#">
              <img className="w-full h-full" src={LogoImg} alt="Султан" />
            </a>
            <PriceList />
          </div>
          <p className="text-xs mt-3.5">
            Компания «Султан» — снабжаем розничные магазины товарами "под ключ"
            в Кокчетаве и Акмолинской области
          </p>
          <form className="flex flex-col gap-3.5 text-xs mt-3.5">
            <p>Подпишись на скидки и акции</p>
            <EmailField />
          </form>

          <div className="flex justify-between items-start flex-wrap mt-8 gap-x-4 gap-y-6">
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
            <div className="flex items-center justify-between w-full max-w-[302px]">
              <div className="flex flex-col w-full">
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
                      className="text-[10px] border-b border-gray-001 border-solid w-max"
                      href="#"
                    >
                      Заказать звонок
                    </a>
                  </div>
                  <Socials />
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <a className="font-semibold text-sm" href="#">
                      opt.sultan@mail.ru
                    </a>
                    <p className="text-xs font-light">На связи в любое время</p>
                  </div>
                  <div className="flex items-center gap-1 mt-2.5">
                    <img
                      className="w-[61px] h-[39px]"
                      src={VisaImg}
                      alt="visa"
                    />
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
      </div>
    </div>
  );
};

export default FooterMob;
