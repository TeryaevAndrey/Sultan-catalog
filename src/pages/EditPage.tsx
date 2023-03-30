import React, { FC } from "react";
import { useAppSelector } from "../store/hooks";

const EditPage: FC = () => {
  const info = useAppSelector((state) => state.edit.product);

  return (
    <div>
      <div className="container">
        <form action="">
          <div className="flex items-center gap-7 flex-wrap gap-y-7">
            <div className="flex flex-col gap-1 text-gray-001">
              <p>Ссылка на изображение</p>
              <input
                className="border border-orange-001 border-solid p-2 rounded"
                type="text"
                value={info.img}
                placeholder="Ссылка на img"
              />
            </div>
            <div className="flex flex-col gap-1 text-gray-001">
              <p>Заголовок</p>
              <input
                className="border border-orange-001 border-solid p-2 rounded"
                type="text"
                value={info.title}
                placeholder="Заголовок"
              />
            </div>
            <div className="flex flex-col gap-1 text-gray-001">
              <p>Вес/объем</p>
              <input
                className="border border-orange-001 border-solid p-2 rounded"
                type="number"
                value={info.weightValue}
                placeholder="Вес/объем"
              />
            </div>
            <div className="flex flex-col gap-1 text-gray-001">
              <p>Описание</p>
              <input
                className="border border-orange-001 border-solid p-2 rounded"
                type="text"
                value={info.description}
                placeholder="Описание"
              />
            </div>
            <div className="flex flex-col gap-1 text-gray-001">
              <p>Цена</p>
              <input
                className="border border-orange-001 border-solid p-2 rounded"
                type="number"
                value={info.price}
                placeholder="Цена"
              />
            </div>
            <div className="flex flex-col gap-1 text-gray-001">
              <p>Производитель</p>
              <input
                className="border border-orange-001 border-solid p-2 rounded"
                type="text"
                value={info.manufacturer}
                placeholder="Производитель"
              />
            </div>
            <div className="flex flex-col gap-1 text-gray-001">
              <p>Бренд</p>
              <input
                className="border border-orange-001 border-solid p-2 rounded"
                type="text"
                value={info.brand}
                placeholder="Бренд"
              />
            </div>
          </div>
          <button className="p-3 bg-orange-001 rounded-[30px] mt-6">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPage;
