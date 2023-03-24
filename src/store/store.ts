import { configureStore } from "@reduxjs/toolkit";
import { catalogSlice } from "./catalogSlice";
import { productsSlice } from "./productsSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    catalog: catalogSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
