import React, { FC } from "react";
import { setProductsCart } from "../../store/cartSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import CartProduct from "./CartProduct";

const CartProducts: FC = () => {
  const productsCart = useAppSelector((state) => state.cart.productsCart);
  const dispatch = useAppDispatch();

  const deleteProduct = (id: number) => {
    localStorage.setItem(
      "productsCart",
      JSON.stringify(productsCart.filter((product) => product.id !== id))
    );

    dispatch(
      setProductsCart(productsCart.filter((product) => product.id !== id))
    );
  };

  console.log(productsCart);

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
              deleteProduct={() => deleteProduct(product.id)}
            />
          );
        })
      ) : (
        <p className="text-gray-001">Выберите товары из каталога.</p>
      )}

      {productsCart.length > 0 && (
        <div className="flex flex-col sm:flex-row-reverse sm:justify-between items-center text-center mt-5 gap-6">
          <p className="text-3xl font-bold text-black-001">1 348,76 ₸</p>
          <button className="px-20 py-8 bg-orange-001 rounded-[80px] w-full sm:max-w-[192px] sm:px-9 sm:py-5 font-bold text-sm">
            Оформить заказ
          </button>
        </div>
      )}
    </div>
  );
};

export default CartProducts;
