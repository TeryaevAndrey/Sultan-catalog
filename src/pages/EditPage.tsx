import React, { FC } from "react";
import { setEditProductInfo } from "../store/editSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import productsData from "../components/Catalog/Products/products.json";
import Title from "../components/Title";

const EditPage: FC = () => {
  const productId = useAppSelector((state) => state.edit.id);
  const info = useAppSelector((state) => state.edit.product);
  const dispatch = useAppDispatch();

  const formHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const products: IProduct[] =
      JSON.parse(localStorage.getItem("products")!) || productsData;

    localStorage.setItem(
      "products",
      JSON.stringify(
        products.map((product) => {
          if (product.id === productId) {
            return {
              ...product,
              img: info.img,
              title: info.title,
              weightValue: info.weightValue,
              description: info.description,
              price: info.price,
              parameters: {
                ...product.parameters,
                manufacturer: info.manufacturer,
                brand: info.brand,
                typeCare: info.typeCare,
              },
            };
          } else {
            return { ...product };
          }
        })
      )
    );

    alert("Успешно");
  };

  return (
    <div className="pb-12 lg:pb-24">
      <div className="container">
        <div className="py-11">
          <Title title="Редактирование товара" />
        </div>

        <form onSubmit={formHandler}>
          <div className="flex items-center gap-7 flex-wrap gap-y-7">
            <div className="flex flex-col gap-1 text-gray-001">
              <p>Ссылка на изображение</p>
              <input
                className="border border-orange-001 border-solid p-2 rounded"
                type="text"
                value={info.img}
                onChange={(e) =>
                  dispatch(setEditProductInfo({ ...info, img: e.target.value }))
                }
                placeholder="Ссылка на img"
              />
            </div>
            <div className="flex flex-col gap-1 text-gray-001">
              <p>Заголовок</p>
              <input
                className="border border-orange-001 border-solid p-2 rounded"
                type="text"
                value={info.title}
                onChange={(e) =>
                  dispatch(
                    setEditProductInfo({ ...info, title: e.target.value })
                  )
                }
                placeholder="Заголовок"
              />
            </div>
            <div className="flex flex-col gap-1 text-gray-001">
              <p>Вес/объем</p>
              <input
                className="border border-orange-001 border-solid p-2 rounded"
                type="number"
                value={info.weightValue}
                onChange={(e) =>
                  dispatch(
                    setEditProductInfo({
                      ...info,
                      weightValue: Number(e.target.value),
                    })
                  )
                }
                placeholder="Вес/объем"
              />
            </div>
            <div className="flex flex-col gap-1 text-gray-001">
              <p>Описание</p>
              <input
                className="border border-orange-001 border-solid p-2 rounded"
                type="text"
                value={info.description}
                onChange={(e) =>
                  dispatch(
                    setEditProductInfo({ ...info, description: e.target.value })
                  )
                }
                placeholder="Описание"
              />
            </div>
            <div className="flex flex-col gap-1 text-gray-001">
              <p>Цена</p>
              <input
                className="border border-orange-001 border-solid p-2 rounded"
                type="number"
                value={info.price}
                onChange={(e) =>
                  dispatch(
                    setEditProductInfo({
                      ...info,
                      price: Number(e.target.value),
                    })
                  )
                }
                placeholder="Цена"
              />
            </div>
            <div className="flex flex-col gap-1 text-gray-001">
              <p>Производитель</p>
              <input
                className="border border-orange-001 border-solid p-2 rounded"
                type="text"
                value={info.manufacturer}
                onChange={(e) =>
                  dispatch(
                    setEditProductInfo({
                      ...info,
                      manufacturer: e.target.value,
                    })
                  )
                }
                placeholder="Производитель"
              />
            </div>
            <div className="flex flex-col gap-1 text-gray-001">
              <p>Бренд</p>
              <input
                className="border border-orange-001 border-solid p-2 rounded"
                type="text"
                value={info.brand}
                onChange={(e) =>
                  dispatch(
                    setEditProductInfo({ ...info, brand: e.target.value })
                  )
                }
                placeholder="Бренд"
              />
            </div>
            <div className="flex flex-col gap-1 text-gray-001">
              <p>Тип ухода {`(Перечислите через запятую)`}</p>
              <input
                className="border border-orange-001 border-solid p-2 rounded"
                type="text"
                value={info.typeCare}
                onChange={(e) =>
                  dispatch(
                    setEditProductInfo({
                      ...info,
                      typeCare: e.target.value.split(","),
                    })
                  )
                }
                placeholder="Тип ухода (перечислите через запятую)"
              />
            </div>
          </div>
          <button
            className="p-3 bg-orange-001 rounded-[30px] mt-6"
            type="submit"
          >
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPage;
