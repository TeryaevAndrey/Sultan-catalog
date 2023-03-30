import React, { FC } from "react";
import productsData from "../components/Catalog/Products/products.json";
import Title from "../components/Title";
import { setAddProductInfo } from "../store/addProductSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

import { v4 as uuidv4 } from "uuid";

const AddProductPage: FC = () => {
  const products: IProduct[] =
    JSON.parse(localStorage.getItem("products")!) || productsData;
  const info = useAppSelector((state) => state.add.info);
  const dispatch = useAppDispatch();

  const changeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (e.target.checked) {
      dispatch(setAddProductInfo({ ...info, typeWeight: value }));
    } else {
      dispatch(setAddProductInfo({ ...info, typeWeight: "" }));
    }
  };

  React.useEffect(() => {
    dispatch(
      setAddProductInfo({
        ...info,
        id: uuidv4(),
        parameters: {
          ...info.parameters,
          hatch: Math.floor(Math.random() * (100000000 - 1 + 1) + 1),
        },
      })
    );
  }, []);

  const formHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !info.img ||
      !info.title ||
      !info.description ||
      !info.typeWeight ||
      !info.weightValue ||
      !info.parameters.brand ||
      !info.parameters.manufacturer ||
      !info.parameters.typeCare
    ) {
      return alert("Вы заполнили не все поля!");
    } else {
      localStorage.setItem(
        "products",
        JSON.stringify([{ ...info }, ...products])
      );

      alert("Успешно!");
    }
  };

  return (
    <div className="pb-12 lg:pb-24">
      <div className="container">
        <div className="py-11">
          <Title title="Добавление товара" />
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
                  dispatch(setAddProductInfo({ ...info, img: e.target.value }))
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
                    setAddProductInfo({ ...info, title: e.target.value })
                  )
                }
                placeholder="Заголовок"
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="flex flex-wrap items-center gap-1 text-gray-001">
                <label htmlFor="weight">Вес</label>
                <input
                  type="checkbox"
                  name="weight"
                  id="weight"
                  value="weight"
                  checked={info.typeWeight === "weight" ? true : false}
                  onChange={changeCheckbox}
                />
              </div>
              <div className="flex flex-wrap items-center gap-1 text-gray-001">
                <label htmlFor="volume">Объем</label>
                <input
                  type="checkbox"
                  name="weight"
                  id="volume"
                  value="volume"
                  checked={info.typeWeight === "volume" ? true : false}
                  onChange={changeCheckbox}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 text-gray-001">
              <p>Вес/объем {`(гр/мл)`}</p>
              <input
                className="border border-orange-001 border-solid p-2 rounded"
                type="number"
                value={info.weightValue === undefined ? "" : info.weightValue}
                onChange={(e) =>
                  dispatch(
                    setAddProductInfo({
                      ...info,
                      weightValue: Number(e.target.value) || undefined,
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
                    setAddProductInfo({ ...info, description: e.target.value })
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
                value={info.price === undefined ? "" : info.price}
                onChange={(e) =>
                  dispatch(
                    setAddProductInfo({
                      ...info,
                      price: Number(e.target.value) || undefined,
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
                value={info.parameters.manufacturer}
                onChange={(e) =>
                  dispatch(
                    setAddProductInfo({
                      ...info,
                      parameters: {
                        ...info.parameters,
                        manufacturer: e.target.value,
                      },
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
                value={info.parameters.brand}
                onChange={(e) =>
                  dispatch(
                    setAddProductInfo({
                      ...info,
                      parameters: { ...info.parameters, brand: e.target.value },
                    })
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
                value={info.parameters.typeCare.join(",")}
                onChange={(e) =>
                  dispatch(
                    setAddProductInfo({
                      ...info,
                      parameters: {
                        ...info.parameters,
                        typeCare: e.target.value.split(","),
                      },
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

export default AddProductPage;
