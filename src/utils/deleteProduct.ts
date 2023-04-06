import { useAppDispatch } from "../store/hooks";
import { setProductsList } from "../store/productsSlice";

const deleteProduct = (products: IProduct[], id: string | number) => {
  const dispatch = useAppDispatch();

  localStorage.setItem(
    "products",
    JSON.stringify(products.filter((product) => product.id !== id))
  );

  dispatch(setProductsList(products.filter((product) => product.id !== id)));
};

export default deleteProduct;
