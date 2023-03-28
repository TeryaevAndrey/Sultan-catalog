import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  productsCart: any[] | [];
} = {
  productsCart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setProductsCart: (state, action: PayloadAction<any[] | []>) => {
      state.productsCart = action.payload;
    },
  },
});

export const { setProductsCart } = cartSlice.actions;
