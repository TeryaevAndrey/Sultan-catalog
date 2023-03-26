import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  productsList: IProduct[];
  currentProduct: IProduct | undefined;
} = {
  productsList: [],
  currentProduct: undefined,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductsList: (state, action: PayloadAction<IProduct[]>) => {
      state.productsList = action.payload;
    },
    setCurrentProduct: (state, action: PayloadAction<IProduct>) => {
      state.currentProduct = action.payload;
    },
  },
});

export const { setProductsList, setCurrentProduct } = productsSlice.actions;
