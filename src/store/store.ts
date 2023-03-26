import { paginationSlice } from "./paginationSlice";
import { configureStore } from "@reduxjs/toolkit";
import { catalogSlice } from "./catalogSlice";
import { parametersSlice } from "./parametersSlice";
import { productsSlice } from "./productsSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    catalog: catalogSlice.reducer,
    parameters: parametersSlice.reducer,
    pagination: paginationSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
