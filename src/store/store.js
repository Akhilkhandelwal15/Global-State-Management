import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";
import cartReducer from "../slices/cartSlice";
import userReducer from "../slices/userSlice";
import productReducer from "../slices/productSlice";
import { loadFromLocalstorage, saveToLocalStorage } from "../utils/storage";

const persistedState = loadFromLocalstorage();

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer,
        user: userReducer,
        product: productReducer
    },
    preloadedState: persistedState,
});

store.subscribe(()=>{
    saveToLocalStorage(store.getState());
});