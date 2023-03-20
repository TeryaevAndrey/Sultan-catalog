import React, { FC } from 'react';
import CartImg from "../../assets/images/cart.svg";

const Cart: FC = () => {
    return (
        <div className="flex items-center gap-3 cursor-pointer">
            <div className="relative">
                <img className="w-11 h-11" src={CartImg} alt="cart" />
                <div className="absolute top-0 -right-[5px] w-6 h-6 rounded-full bg-orange-001 text-white border-[3px] border-white border-solid flex justify-center items-center">
                    <span className="text-white font-bold text-sm">3</span>
                </div>
            </div>
            <div className="flex flex-col">
                <p className="text-gray-001 font-light text-xs">Корзина</p>
                <p className="text-black-001 font-semibold text-sm">12 478 ₸ </p>
            </div>
        </div>
    );
};

export default Cart;