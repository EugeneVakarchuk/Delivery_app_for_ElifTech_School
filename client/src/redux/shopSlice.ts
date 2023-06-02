import {createSlice} from "@reduxjs/toolkit";
import {IShop} from "../models/IShop";

const initialState: IShop = {
	title: null,
	id: null,
};

export const shopSlice = createSlice({
	name: "shop",
	initialState,
	reducers: {
		setShop(state, action) {
			state.id = action.payload.id;
			state.title = action.payload.title;
		},
	},
});

export default shopSlice.reducer;
export const {setShop} = shopSlice.actions;
