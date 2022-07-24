import { useLocation, useNavigate } from 'react-router-dom'
import useSWR from 'swr'
import Button from '../components/Button/Button'
import BackChevron from '../components/Icons/BackChevron'
import Disk from '../components/Icons/Disk'
import More from '../components/Icons/More'
import Playlist from '../components/Icons/Playlist'
import Typography from '../components/Typography/Typography'
import { Song } from '../types/song'
import { getMins, getValueInK } from '../utils/utils'

type Props = {
	type: 'playlist' | 'album'
	id: number
}

const fetcher = (url: string) =>
	fetch(url)
		.then(r => r.json())
		.then(r => r.results)

const Details = () => {
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

	const songs = data.songs as Array<Song>

	const imageUrl = data.image?.[2]?.link

	return (
		<div>
			{/* Header */}
			<div className='flex items-center justify-between'>
				<Button shape='circle' onClick={() => history.back()}>
					<BackChevron fillClassName='fill-dark-100' />
				</Button>
				<span className='text-2xl'>Now Playing</span>
				<div className='flex gap-x-3 '>
					<Button onClick={() => null}>
						<Playlist />
					</Button>
					<Button className='h-6 w-6' onClick={() => null}>
						<More fillClassName='fill-dark-100' />
					</Button>
				</div>
			</div>
			{/* Cover Image section */}
			<div className='relative h-72 w-full py-5'>
				<Disk className='absolute top-[calc(50%-104px)] left-1/3 h-52 w-52' image={imageUrl} />
				<div
					className='absolute z-10 h-60 w-60 rounded-xl bg-cover'
					style={{ backgroundImage: `url(${imageUrl})` }}
				></div>
			</div>
			{/* Cover Details */}
			<div className='flex flex-col'>
				<Typography type='subtitle'>{data.name}</Typography>
				<Typography className='gap-y-1  text-sm text-dark-100' type='caption'>
					{getValueInK(data.fanCount)}
				</Typography>
			</div>
			<div className='flex justify-between'>
				<Button shape='square'>Shuffle</Button>
				<Button shape='square' variant='primary'>
					Play All
				</Button>
			</div>
			{/* Track List */}
			<div>
				<Typography type='subtitle'>Songs</Typography>
				<div className='grid gap-y-3'>
					{songs.map((song, index) => (
						<div
							key={index}
							className='grid grid-cols-[auto_minmax(187px,_1fr)_auto] gap-x-4'
							onClick={() => navigate('/player', { state: { id: song.id } })}
						>
							<Typography>{(index + 1).toString().padStart(2, '0')}</Typography>
							<div className='flex flex-col'>
								<Typography type='caption'>{song.name}</Typography>
								<Typography className='text-dark-100' type='subCaption'>
									{getMins(Number(song.duration))}
								</Typography>
							</div>
							<Button className='h-6 w-6'>
								<More fillClassName='fill-dark-100' />
							</Button>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Details
