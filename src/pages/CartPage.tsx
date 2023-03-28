import React, { FC } from "react";
import Back from "../components/Back";
import CartProducts from "../components/Cart/CartProducts";
import Crumbs from "../components/Crumbs";
import Title from "../components/Title";
import { setProductsCart } from "../store/cartSlice";
import { useAppDispatch } from "../store/hooks";

const CartPage: FC = () => {
  const productsCart = JSON.parse(localStorage.getItem("productsCart") || "[]");
  const dispatch = useAppDispatch();

  return (
    <section className="pb-12">
      <div className="container">
        <div className="lg:hidden mb-5">
          <Back />
        </div>
        <Crumbs way={[{ title: "Корзина", to: "/cart" }]} />
        <Title title="Корзина" />
        <div className="mt-5">
          <CartProducts />
        </div>
      </div>
    </section>
  );
};

export default CartPage;
