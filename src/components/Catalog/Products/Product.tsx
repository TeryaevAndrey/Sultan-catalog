import React, { FC } from "react";
import ProductImg from "../../../assets/images/products/product-1.png";
import ToCartBtn from "../../ToCartBtn";
import Characteristics from "../../Characteristics";
import Weight from "../../Product/Weight";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../store/hooks";
import { setCurrentProduct } from "../../../store/productsSlice";

const Product: FC<IProduct> = ({
  id,
  img,
  title,
  description,
  typeWeight,
  weightValue,
  price,
  parameters,
}) => {
  const dispatch = useAppDispatch();
  const productsCart = JSON.parse(localStorage.getItem("productsCart") || "[]");
  const [inCart, setInCart] = React.useState<boolean>(
    productsCart.find((product: IProduct) => product.id === id) ? true : false
  );
  const navigate = useNavigate();

  const goToProductPage = (e: React.MouseEvent) => {
    dispatch(
      setCurrentProduct({
        id,
        img,
        title,
        description,
        typeWeight,
        weightValue,
        price,
        parameters,
      })
    );

    localStorage.setItem(
      "currentProduct",
      JSON.stringify({
        id,
        img,
        title,
        description,
        typeWeight,
        weightValue,
        price,
        parameters,
      })
    );

    navigate(`/${id}`);
  };

  const putInTheCart = (e: React.MouseEvent) => {
    e.stopPropagation();

    setInCart(!inCart);
  };

  React.useEffect(() => {
    if (inCart) {
      localStorage.setItem(
        "productsCart",
        JSON.stringify([
          ...productsCart,
          {
            id,
            img,
            title,
            description,
            typeWeight,
            weightValue,
            price,
            parameters,
            amount: 1,
          },
        ])
      );
    } else {
      localStorage.setItem(
        "productsCart",
        JSON.stringify(
          productsCart.filter((product: IProduct) => product.id !== id)
        )
      );
    }
  }, [inCart]);

  return (
    <div
      className="w-full rounded-[10px] flex flex-col bg-[white] shadow-lg px-6 py-7 ease-linear duration-200 lg:hover:scale-[1.008]"
      onClick={goToProductPage}
    >
      <img className="max-h-[194px] object-contain" src={img} alt="product" />
      <div className="flex flex-col mb-3.5">
        <Weight type={typeWeight} value={weightValue} />
        <p className="text-black-001 font-medium mt-2.5">
          <span className="font-bold text-base">{title.split(" ")[0]}</span>{" "}
          {title.split(" ").slice(1).join(" ")}
        </p>
        <div className="mt-3.5">
          <Characteristics
            hatch={parameters.hatch}
            manufacturer={parameters.manufacturer}
            brand={parameters.brand}
            typeCare={parameters.typeCare}
          />
        </div>
      </div>
      <div className="flex items-center justify-between mt-auto">
        <p className="text-black-001 font-extrabold text-base">{price} ₸</p>
        <ToCartBtn onClick={putInTheCart} inCart={inCart} />
      </div>
    </div>
  );
};

export default Product;
