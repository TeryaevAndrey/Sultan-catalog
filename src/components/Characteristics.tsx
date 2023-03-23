import React, { FC } from "react";

interface ICharacteristics {
  hatch: number;
  manufacturer: string;
  brand: string;
  typeCare: string[];
}

const Characteristics: FC<ICharacteristics> = ({hatch, manufacturer, brand, typeCare}) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-1 font-light text-gray-001">
        <span>Штрихкод:</span>
        <span className="text-black-001 font-medium">{hatch}</span>
      </div>
      <div className="flex items-center gap-1 font-light text-gray-001">
        <span>Производитель:</span>
        <span className="text-black-001 font-medium">{manufacturer}</span>
      </div>
      <div className="flex items-center gap-1 font-light text-gray-001">
        <span>Бренд:</span>
        <span className="text-black-001 font-medium">{brand}</span>
      </div>
      <div className="flex items-center gap-1 font-light text-gray-001 truncate">
        <span>Тип ухода:</span>
        <span className="text-black-001 font-medium">
          {
            typeCare.map((el, index) => {
              return `${el}${index !== typeCare.length - 1 ? "," : ""} `;
            })
          }
        </span>
      </div>
    </div>
  );
};

export default Characteristics;
