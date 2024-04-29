import { useDispatch, useSelector } from 'react-redux';
import { createRandomMovie } from '../data';
import { addMovie, removeMovie } from '../store';

function MoviePlaylist() {
	// TODO:
	// movie list 가져오기
	const dispatch = useDispatch();

	const moviePlaylist = useSelector(state => state.movie);

	const handleMovieAdd = movie => dispatch(addMovie(movie));

	const handleMovieRemove = movie => dispatch(removeMovie(movie));

	const renderedMovies = moviePlaylist.map(movie => {
		return (
			<li key={movie}>
				{movie}
				<button
					onClick={() => handleMovieRemove(movie)}
					className='button is-danger'
				>
					X
				</button>
			</li>
		);
	});

	return (
		<div className='content'>
			<div className='table-header'>
				<h3 className='subtitle is-3'>영화 플레이리스트</h3>
				<div className='buttons'>
					<button
						onClick={() => handleMovieAdd(createRandomMovie())}
						className='button is-link'
					>
						+ 영화 추가
					</button>
				</div>
			</div>
			<ul>{renderedMovies}</ul>
		</div>
	);
}

export default MoviePlaylist;
