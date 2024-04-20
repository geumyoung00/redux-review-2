import { createRandomSong } from '../data';

function SongPlaylist() {
	// TODO:
	// 노래 목록 가져오기
	const songPlaylist = [];

	const handleSongAdd = (song) => {};

	const handleSongRemove = (song) => {};

	const renderedSongs = songPlaylist.map((song) => {
		return (
			<li key={song}>
				{song}
				<button
					onClick={() => handleSongRemove(song)}
					className="button is-danger"
				>
					X
				</button>
			</li>
		);
	});

	return (
		<div className="content">
			<div className="table-header">
				<h3 className="subtitle is-3">음악 플레이리스트</h3>
				<div className="buttons">
					<button
						onClick={() => handleSongAdd(createRandomSong())}
						className="button is-link"
					>
						+ 곡 추가
					</button>
				</div>
			</div>
			<ul>{renderedSongs}</ul>
		</div>
	);
}

export default SongPlaylist;
