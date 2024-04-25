import { configureStore, createSlice } from '@reduxjs/toolkit';

const MoviesSlice = createSlice({
	name: 'movie',
	initialState: [],
	reducers: {
		addMovie(state, action) {
			state.push(action.payload);
		},
		removeMovie(state, action) {
			const index = state.indexOf(action.payload);
			state.splice(index, 1);
		},
	},
});

const SongsSliece = createSlice({
	name: 'song',
	initialState: [],
	reducers: {
		addSong(state, action) {
			state.push(action.payload);
		},
		removeSong(state, action) {
			return state.filter(song => song !== action.payload);
		},
	},
});

export const store = configureStore({
	reducer: {
		movie: MoviesSlice.reducer,
		song: SongsSliece.reducer,
	},
});

export const { addMovie, removeMovie } = MoviesSlice.actions;
export const { addSong, removeSong } = SongsSliece.actions;
