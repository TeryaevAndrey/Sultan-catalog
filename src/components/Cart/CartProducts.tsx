import React, { FC } from "react";
import { setProductsCart } from "../../store/cartSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import CartProduct from "./CartProduct";

const CartProducts: FC = () => {
  const productsCart = useAppSelector((state) => state.cart.productsCart);
  const dispatch = useAppDispatch();

  return (
    <div className="w-full flex flex-col">
      {productsCart.length > 0 ? (
        productsCart.map((product: IProduct) => {
          return (
            <CartProduct
              key={product.id}
              id={product.id}
              img={product.img}
              parameters={product.parameters}
              title={product.title}
              description={product.description}
              typeWeight={product.typeWeight}
              weightValue={product.weightValue}
              price={product.price}
            />
          );
        })
      ) : (
        <p className="text-gray-001">Выберите товары из каталога.</p>
      )}
    </div>
  );
};

export default CartProducts;
