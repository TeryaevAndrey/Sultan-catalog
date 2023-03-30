import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IEditProduct {
  img: string;
  title: string;
  weightValue: number | undefined;
  description: string;
  price: number | undefined;
  manufacturer: string;
  brand: string;
  typeCare: string[];
}

const initialState: {
  id: string | number | undefined;
  product: IEditProduct;
} = {
  id: undefined,
  product: {
    img: "",
    title: "",
    weightValue: undefined,
    description: "",
    price: undefined,
    manufacturer: "",
    brand: "",
    typeCare: [],
  },
};

export const editSlice = createSlice({
  name: "edit",
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<number | string>) => {
      state.id = action.payload;
    },

    setEditProductInfo: (state, action: PayloadAction<IEditProduct>) => {
      state.product = action.payload;
    },
  },
});

export const { setId, setEditProductInfo } = editSlice.actions;
