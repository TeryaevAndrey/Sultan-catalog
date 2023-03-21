import React, { FC } from "react";
import WhatsappImg from "../assets/images/socials/whatsapp.svg";
import TelegramImg from "../assets/images/socials/telegram.svg";

const Socials: FC = () => {
  return (
    <div className="flex flex-col max-w-[123px] lg:max-w-full w-full gap-4 -mt-[6px]">
      <h6 className="text-sm leading-[21px]">Связь в мессенджерах:</h6>
      <div className="flex items-center gap-2.5">
        <a className="w-[39px] h-[39px]" href="#">
          <img className="w-full h-full" src={WhatsappImg} alt="whatsapp" />
        </a>
        <a className="w-[39px] h-[39px]" href="#">
          <img className="w-full h-full" src={TelegramImg} alt="telegram" />
        </a>
      </div>
    </div>
  );
};

export default Socials;
