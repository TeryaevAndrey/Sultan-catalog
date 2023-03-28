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

  React.useEffect(() => {
    dispatch(
      setProductsCart(JSON.parse(localStorage.getItem("productsCart") || "[]"))
    );
  }, []);

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
        {productsCart.length > 0 && (
          <div className="flex flex-col sm:flex-row-reverse sm:justify-between items-center text-center mt-5 gap-6">
            <p className="text-3xl font-bold text-black-001">1 348,76 ₸</p>
            <button className="px-20 py-8 bg-orange-001 rounded-[80px] w-full sm:max-w-[192px] sm:px-9 sm:py-5 font-bold text-sm">
              Оформить заказ
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartPage;
