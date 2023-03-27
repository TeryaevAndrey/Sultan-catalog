import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  categoriesList: string[];
  categoriesSelected: string[];
} = {
  categoriesList: [],
  categoriesSelected: [],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.categoriesList = action.payload;
    },

    setCategoriesSelected: (state, action: PayloadAction<string[]>) => {
      state.categoriesSelected = action.payload;
    },
  },
});

export const { setCategories, setCategoriesSelected } = categoriesSlice.actions;
