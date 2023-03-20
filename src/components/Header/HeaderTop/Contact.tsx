import React, { FC } from "react";
import EmailImg from "../../../assets/images/email.svg";

const Contact: FC = () => {
  return (
    <div className="flex items-center gap-5">
      <img src={EmailImg} alt="location" />
      <div className="flex flex-col leading-[18px] font-semibold text-black-001">
        <h6>opt.sultan@mail.ru</h6>
        <p className="text-gray-001 font-normal">На связи в любое время</p>
      </div>
    </div>
  );
};

export default Contact;
