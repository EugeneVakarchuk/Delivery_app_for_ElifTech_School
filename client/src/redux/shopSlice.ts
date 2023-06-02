import { createSlice } from "@reduxjs/toolkit";
import { IShop } from "../models/IShop";

const initialState: IShop = {
  title: null,
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {},
});

export default shopSlice.reducer;
export const {} = shopSlice.actions;
