import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISort {
  sortBy: string;
  title: string;
}

const initialState: {
  sort: ISort;
} = {
  sort: {
    sortBy: "title",
    title: "Название",
  },
};

export const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    setSort: (state, action: PayloadAction<ISort>) => {
      state.sort = action.payload;
    },
  },
});

export const { setSort } = catalogSlice.actions;
