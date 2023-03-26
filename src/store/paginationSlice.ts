import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  currentPage: number;
  totalPages: number;
  perProducts: number;
} = {
  currentPage: 1,
  totalPages: 1,
  perProducts: 9,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },

    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },
  },
});

export const { setCurrentPage, setTotalPages } = paginationSlice.actions;
