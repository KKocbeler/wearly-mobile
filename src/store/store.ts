import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./reducers/CartSlice"

export const store = configureStore({
    reducer: {
        cartSlice: CartSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;