import { CartItem, CartState } from './../../types/cartItem';
import { createSlice } from "@reduxjs/toolkit";

const initialState: CartState = {
    items: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const hasItem = state.items.find(item => item.cartItemId === action.payload.cartItemId)
            if(hasItem) {
                hasItem.quantity += 1;
                hasItem.sum = hasItem.quantity * hasItem.price
            } else {
                state.items.push({
                    ...action.payload,
                    quantity: 1,
                    sum: action.payload.price
                })
            }
        },
        decraseItem: (state, action) => {
            const hasItem = state.items.find(item => item.cartItemId === action.payload.cartItemId);
            if(hasItem && hasItem.quantity > 1) {
                hasItem.quantity -= 1
                hasItem.sum = hasItem.quantity * hasItem.price
            }
        },
        deleteFromCart: (state, action) => {
            state.items = state.items.filter(item => item.cartItemId !== action.payload.cartItemId)
        }

    }
})

export const { addItemToCart, decraseItem, deleteFromCart } = cartSlice.actions

export default cartSlice.reducer