import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	products: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const index = state.products.findIndex(
				(product) => product.id === action.payload.id
			);
			if (index === -1) {
				state.products.push(action.payload);
			} else {
				state.products[index].quantity = state.products[index].quantity + 1;
			}
		},
		removeFromCart: (state, action) => {
			const index = state.products.findIndex(
				(product) => product.id === action.payload.id
			);
			if (state.products[index].quantity > 1) {
				state.products[index].quantity = state.products[index].quantity - 1;
			} else {
				state.products = state.products.filter(
					(product) => product.id !== action.payload.id
				);
			}
		},
	},
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
