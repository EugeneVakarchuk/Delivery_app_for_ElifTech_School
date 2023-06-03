import {combineReducers, configureStore} from "@reduxjs/toolkit";
import shopReducer from "./shopSlice";
import capchaReducer from "./capchaSlice";

const rootReducer = combineReducers({
	shopReducer,
	capchaReducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
