import React, { FC } from "react";
import ProductImg from "../../assets/images/products/product-1.png";
import { setProductsCart } from "../../store/cartSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Delete from "../Delete";
import Counter from "../Counter";
import Weight from "../Product/Weight";

const CartProduct: FC<ICartProduct> = ({
  id,
  img,
  title,
  description,
  typeWeight,
  weightValue,
  price,
  parameters,
  deleteProduct,
  amount,
}) => {
  const dispatch = useAppDispatch();
  const productsCart = useAppSelector((state) => state.cart.productsCart);
  const [amountValue, setAmountValue] = React.useState<number>(amount || 1);
  const [priceValue, setPriceValue] = React.useState<number | undefined>(price);

  const reduceAmount = () => {
    if (amountValue <= 0) {
      return;
    }

    setAmountValue((prev) => prev - 1);
  };

  const increaseAmount = () => {
    setAmountValue((prev) => prev + 1);
  };

  const changeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmountValue(Number(e.target.value));
  };

  React.useEffect(() => {
    dispatch(
      setProductsCart(
        productsCart.map((product) => {
          if (product.id === id) {
            return { ...product, id: id, amount: amountValue };
          } else {
            return { ...product };
          }
        })
      )
    );
  }, [amountValue]);

  React.useEffect(() => {
    setPriceValue((prev) => prev! - price!);
  }, [reduceAmount]);

  React.useEffect(() => {
    setPriceValue(price! * amountValue);
  }, [increaseAmount]);

  return (
    <div className="py-5 flex flex-col xl:flex-row xl:items-center xl:justify-between w-full border-t border-gray-001/[0.3] border-dotted flex-wrap last:border-b">
      <img
        className="w-full h-full md:max-w-[281px] max-h-[191px] object-contain"
        src={img}
        alt="product"
      />
      <div className="flex flex-col mt-2.5 max-w-[507px] w-full xl:mr-auto xl:ml-5">
        <Weight type={typeWeight} value={weightValue} />
        <h2 className="text-[20px] font-medium text-black-001 mt-2.5">
          {title}
        </h2>
        <p className="text-xs font-light text-gray-001 mt-2.5 leading-[18px]">
          {description}
        </p>
      </div>
      <div className="flex items-center justify-between mt-4 xl:gap-10">
        <div className="xl:border-l xl:border-gray-001/[0.3] xl:border-dotted xl:pl-10 py-1 h-[44px] flex items-center">
          <Counter
            reduceAmount={reduceAmount}
            increaseAmount={increaseAmount}
            amount={amountValue}
            onChange={changeAmount}
          />
        </div>
        <p className="text-base xl:text-3xl font-bold text-black-001 px-[15px] xl:px-10 py-1 border-l border-r border-gray-001/[0.3] border-dotted ml-auto mr-3 max-h-[44px] h-full">
          {priceValue!.toFixed(2)} ₸
        </p>
        <Delete onClick={deleteProduct!} />
      </div>
    </div>
  );
};

export default CartProduct;
