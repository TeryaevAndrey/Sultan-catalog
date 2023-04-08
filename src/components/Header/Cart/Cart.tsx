import React, { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartImg from "../../../assets/images/cart.svg";
import { useAppSelector } from "../../../store/hooks";

const Cart: FC = () => {
  const productsCart =
    useAppSelector((state) => state.cart.productsCart) ||
    JSON.parse(localStorage.getItem("productsCart") || "[]");
  const [sum, setSum] = useState<number>(0);

  useEffect(() => {
    let totalSum: number = 0;

    productsCart.forEach((product) => {
      if (product.price) {
        totalSum += product.price * product.amount;
      }
    });

    setSum(totalSum);
  }, [productsCart]);

  return (
    <Link className="flex items-center gap-3 cursor-pointer" to="/cart">
      <div className="relative">
        <img className="w-11 h-11" src={CartImg} alt="cart" />
        <div className="absolute top-0 -right-[5px] w-6 h-6 rounded-full bg-orange-001 text-white border-[3px] border-white border-solid flex justify-center items-center">
          <span className="text-white font-bold text-sm">
            {productsCart.length || 0}
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-gray-001 font-light text-xs">Корзина</p>
        <p className="text-black-001 font-semibold text-sm">
          {sum.toFixed(2)} ₸{" "}
        </p>
      </div>
    </Link>
  );
};

export default Cart;
