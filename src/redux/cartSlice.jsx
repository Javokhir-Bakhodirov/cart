import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
	const savedCart = localStorage.getItem("cart");
	return savedCart ? JSON.parse(savedCart) : { products: [] };
};

const initialState = loadCartFromLocalStorage();

const saveCartToLocalStorage = (cart) => {
	localStorage.setItem("cart", JSON.stringify(cart));
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
				state.products.push({ ...action.payload, quantity: 1 });
			} else {
				state.products[index].quantity = state.products[index].quantity + 1;
			}
			saveCartToLocalStorage(state);
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
			saveCartToLocalStorage(state);
		},
	},
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
