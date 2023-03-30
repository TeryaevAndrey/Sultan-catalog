import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { setEditProductInfo, setId } from "../../../store/editSlice";
import { useAppDispatch } from "../../../store/hooks";
import Characteristics from "../../Characteristics";
import Weight from "../../Product/Weight";

const ProductAdmin: FC<IProduct> = ({
  id,
  img,
  title,
  description,
  typeWeight,
  weightValue,
  price,
  parameters,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const editBtnHandler = () => {
    dispatch(setId(id));
    dispatch(setEditProductInfo({
      img,
      title,
      weightValue,
      price, 
      manufacturer: parameters.manufacturer,
      description,
      brand: parameters.brand
    }));

    navigate(`/admin/edit/:${id}`);
  }

  return (
    <div className="w-full rounded-[10px] flex flex-col bg-[white] shadow-lg px-6 py-7 ease-linear duration-200">
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
        <div
          className="text-black-001 cursor-pointer"
          onClick={editBtnHandler}
        >
          редактировать
        </div>
      </div>
    </div>
  );
};

export default ProductAdmin;
