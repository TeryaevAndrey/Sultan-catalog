import React, { FC } from "react";
import { setProductsCart } from "../../store/cartSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import CartProduct from "./CartProduct";

const CartProducts: FC = () => {
  const productsCart = useAppSelector((state) => state.cart.productsCart);
  const dispatch = useAppDispatch();
  const [sum, setSum] = React.useState<number>(0);

  React.useEffect(() => {
    dispatch(
      setProductsCart(JSON.parse(localStorage.getItem("productsCart") || "[]"))
    );
  }, []);

  const deleteProduct = (id: number) => {
    localStorage.setItem(
      "productsCart",
      JSON.stringify(productsCart.filter((product) => product.id !== id))
    );

    dispatch(
      setProductsCart(productsCart.filter((product) => product.id !== id))
    );
  };

  React.useEffect(() => {
    let sum = 0;

    productsCart.forEach((product) => {
      sum += product.price * product.amount;
    });

    setSum(sum);
  }, [productsCart]);

  return (
    <div className="w-full flex flex-col">
      {productsCart.length > 0 ? (
        productsCart.map((product: any) => {
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
              amount={product.amount}
            />
          );
        })
      ) : (
        <p className="text-gray-001">Выберите товары из каталога.</p>
      )}

      {productsCart.length > 0 && (
        <div className="flex flex-col sm:flex-row-reverse sm:justify-between items-center text-center mt-5 gap-6">
          <p className="text-3xl font-bold text-black-001">{sum.toFixed(2)} ₸</p>
          <button className="px-20 py-8 bg-orange-001 rounded-[80px] w-full sm:max-w-[192px] sm:px-9 sm:py-5 font-bold text-sm">
            Оформить заказ
          </button>
        </div>
      )}
    </div>
  );
};

export default CartProducts;
