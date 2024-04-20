import './styles.css';
import MoviePlaylist from './components/MoviePlaylist';
import SongPlaylist from './components/SongPlaylist';

export default function App() {
	const handleResetClick = () => {};

	return (
		<div className="container is-fluid">
			<button onClick={() => handleResetClick()} className="button is-danger">
				모든 플레이리스트 리셋
			</button>
			<hr />
			<MoviePlaylist />
			<hr />
			<SongPlaylist />
		</div>
	);
}
