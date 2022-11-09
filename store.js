import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSclice";

export const store = configureStore({
    reducer: {
        nav: navReducer,
    }
});