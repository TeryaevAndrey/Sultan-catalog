import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  productsCart: IProduct[] | [];
} = {
  productsCart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setProductsCart: (state, action: PayloadAction<IProduct[] | []>) => {
      state.productsCart = action.payload;
    },
  },
});

export const { setProductsCart } = cartSlice.actions;
