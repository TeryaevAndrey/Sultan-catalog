import React, { FC } from "react";
import MenuLink from "./MenuLink";

const Menu: FC = () => {
  return (
    <div className="flex items-center gap-x-14">
      <MenuLink title="О компании" to="/" />
      <MenuLink title="Доставка и оплата" to="/" />
      <MenuLink title="Возврат" to="/" />
      <MenuLink title="Контакты" to="/" />
    </div>
  );
};

export default Menu;
