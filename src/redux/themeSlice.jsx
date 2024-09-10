import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	theme: localStorage.getItem("theme") || "light",
};

const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		changeTheme: (state, action) => {
			state.theme = action.payload;
			localStorage.setItem("theme", action.payload);
			document.documentElement.classList.toggle(
				"dark",
				action.payload === "dark"
			);
		},
	},
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
