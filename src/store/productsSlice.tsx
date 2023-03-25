import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  productsList: IProduct[];
  currentProduct: IProduct | undefined;
  productsListFiltered: IProduct[];
} = {
  productsList: [],
  currentProduct: undefined,
  productsListFiltered: [],
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

    setProductsListFiltered: (state, action: PayloadAction<IProduct[]>) => {
      state.productsListFiltered = action.payload;
    },
  },
});

export const { setProductsList, setCurrentProduct, setProductsListFiltered } =
  productsSlice.actions;
