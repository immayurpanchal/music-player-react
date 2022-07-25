import { useLocation, useNavigate } from 'react-router-dom'
import useSWR from 'swr'
import Button from '../components/Button/Button'
import More from '../components/Icons/More'
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
		type === 'playlist' ? `https://saavn.me/playlists?id=${id}` : `https://saavn.me/albums?id=${id}`,
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
				const { name, downloadUrl, image, artist, id, year } = currentSong
				return (
					<div
						key={id}
						className='grid grid-cols-[auto_minmax(100px,_1fr)_auto] items-center gap-x-3 rounded-2xl p-3 '
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
						<div className='flex flex-col'>
							{/* TODO: Use Typography component  */}
							<span className='truncate'>{name}</span>
							<span className='text-dark-100'>{year}</span>
						</div>
						<Button className='h-6 w-6'>
							<More fillClassName='fill-dark-100' />
						</Button>
					</div>
				)
			})}
		</>
	)
}

export default SongList
