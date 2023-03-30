import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  productsCart: ICartProduct[] | [];
} = {
  productsCart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setProductsCart: (state, action: PayloadAction<ICartProduct[]>) => {
      state.productsCart = action.payload;
    },
  },
});

export const { setProductsCart } = cartSlice.actions;
