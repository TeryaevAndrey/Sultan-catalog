import React, { FC } from "react";
import CartProduct from "./CartProduct";

const CartProducts: FC = () => {
  return (
    <div className="w-full flex flex-col">
      <CartProduct />
      <CartProduct />
      <CartProduct />
    </div>
  );
};

export default CartProducts;
