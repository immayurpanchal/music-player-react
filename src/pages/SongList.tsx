import { useLocation, useNavigate } from 'react-router-dom'
import useSWR from 'swr'
import Polygon from '../components/Polygon/Polygon'
import { Song } from '../types/song'
import { PlayerProps } from './Player'

type Props = {
	type: 'playlist' | 'album'
	id: number
}

const fetcher = (url: string) =>
	fetch(url)
		.then(r => r.json())
		.then(r => r.results)

const SongList = () => {
	const location = useLocation()
	const navigate = useNavigate()
	const { type, id } = location.state as Props
	const { data, error } = useSWR(
		type === 'playlist'
			? `https://saavn.me/playlists?id=${id}`
			: `https://saavn.me/albums?id=${id}`,
		fetcher
	)

	if (error) {
		return <div>failed to load</div>
	}

	if (!data) {
		return <div>Loading...</div>
	}

	return (
		<>
			{data.songs.map((currentSong: Song) => {
				const { name, downloadUrl, image, artist, id } = currentSong
				return (
					<div
						key={id}
						onClick={() =>
							navigate('/player', {
								state: {
									title: name,
									image: image?.[2]?.link,
									trackSrc: downloadUrl?.[4]?.link,
									singer: artist
								}
							} as { state: PlayerProps })
						}
					>
						<Polygon id={id} image={image?.[2]?.link || ''} />
						{name}
					</div>
				)
			})}
		</>
	)
}

export default SongList
