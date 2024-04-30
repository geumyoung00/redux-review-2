import { configureStore } from '@reduxjs/toolkit';
import MoviesSlice, { movieAction } from './slices/moviesSlice';
import SongsSliece, { songsAction } from './slices/songsSlice';

export const store = configureStore({
	reducer: {
		movie: MoviesSlice.reducer,
		song: SongsSliece.reducer,
	},
});

export const { addMovie, removeMovie } = movieAction;
export const { addSong, removeSong } = songsAction;

export { reset } from './actions';
