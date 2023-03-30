import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAddProduct {
  info: IProduct;
}

const initialState: IAddProduct = {
  info: {
    id: 0,
    img: "",
    title: "",
    typeWeight: "",
    weightValue: undefined,
    description: "",
    price: undefined,
    parameters: {
      hatch: 0,
      manufacturer: "",
      brand: "",
      typeCare: [],
    },
  },
};

export const addProductSlice = createSlice({
  name: "addProduct",
  initialState,
  reducers: {
    setAddProductInfo: (state, action: PayloadAction<IProduct>) => {
      state.info = action.payload;
    },
  },
});

export const { setAddProductInfo } = addProductSlice.actions;
