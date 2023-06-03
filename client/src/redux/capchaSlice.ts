import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	isCapchaValid: false,
};

export const capchaSlice = createSlice({
	name: "capcha",
	initialState,
	reducers: {
		setCapchaIsTrue(state) {
			state.isCapchaValid = true;
		},
	},
});

export default capchaSlice.reducer;
export const {setCapchaIsTrue} = capchaSlice.actions;
