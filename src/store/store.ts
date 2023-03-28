import { categoriesSlice } from "./categoriesSlice";
import { paginationSlice } from "./paginationSlice";
import { configureStore } from "@reduxjs/toolkit";
import { catalogSlice } from "./catalogSlice";
import { parametersSlice } from "./parametersSlice";
import { productsSlice } from "./productsSlice";
import { cartSlice } from "./cartSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    catalog: catalogSlice.reducer,
    parameters: parametersSlice.reducer,
    pagination: paginationSlice.reducer,
    categories: categoriesSlice.reducer,
    cart: cartSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
