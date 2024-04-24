import { configureStore, createSlice } from '@reduxjs/toolkit';

const MoviesSlice = createSlice({
	name: 'movie',
	initialState: [],
	reducers: {
		addMovie(state, action) {
			state.push(action.payload);
		},
		removeMovie(state, action) {
			let index = state.indexOf(action.payload);
			state.splice(index, 1);
		},
	},
});

export const store = configureStore({
	reducer: {
		movie: MoviesSlice.reducer,
	},
});

export const { addMovie, removeMovie } = MoviesSlice.actions;
export default store;
