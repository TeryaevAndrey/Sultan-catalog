import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  categoriesList: string[];
} = {
  categoriesList: [],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.categoriesList = action.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;
