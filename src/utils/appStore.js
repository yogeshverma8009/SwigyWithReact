import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../ReduxSlice/cartSlice";

const appStore = configureStore({
    reducer:{
        cart: cartReducer,
    },
});

export default appStore;