import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IEditProduct {
  img: string;
  title: string;
  weightValue: number;
  description: string;
  price: number;
  manufacturer: string;
  brand: string;
  typeCare: string[];
}

const initialState: {
  id: number | undefined;
  product: IEditProduct;
} = {
  id: undefined,
  product: {
    img: "",
    title: "",
    weightValue: 0,
    description: "",
    price: 0,
    manufacturer: "",
    brand: "",
    typeCare: [],
  },
};

export const editSlice = createSlice({
  name: "edit",
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },

    setEditProductInfo: (state, action: PayloadAction<IEditProduct>) => {
      state.product = action.payload;
    },
  },
});

export const { setId, setEditProductInfo } = editSlice.actions;
