import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  priceBefore: string;
  priceAfter: string;

  searchValue: string;
  manufacturersSelected: string[];
} = {
  priceBefore: "",
  priceAfter: "",

  searchValue: "",
  manufacturersSelected: [],
};

export const parametersSlice = createSlice({
  name: "parameters",
  initialState,
  reducers: {
    setPriceBefore: (state, action: PayloadAction<string>) => {
      state.priceBefore = action.payload;
    },

    setPriceAfter: (state, action: PayloadAction<string>) => {
      state.priceAfter = action.payload;
    },

    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },

    setManufacturersSelected: (state, action: PayloadAction<string[]>) => {
      state.manufacturersSelected = action.payload;
    },
  },
});

export const {
  setPriceBefore,
  setPriceAfter,
  setSearchValue,
  setManufacturersSelected,
} = parametersSlice.actions;
