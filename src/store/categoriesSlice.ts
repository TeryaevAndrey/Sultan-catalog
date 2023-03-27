import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  categoriesList: string[];
  currentCategory: number | undefined;
} = {
  categoriesList: [],
  currentCategory: undefined,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.categoriesList = action.payload;
    },

    setCurrentCategory: (state, action: PayloadAction<number>) => {
      state.currentCategory = action.payload;
    }
  },
});

export const { setCategories, setCurrentCategory } = categoriesSlice.actions;
