import { useNavigate } from 'react-router-dom'
import useSWR from 'swr'
import Button from '../components/Button/Button'
import SearchIcon from '../components/Icons/SearchIcon'
import Settings from '../components/Icons/Settings'
import Typography from '../components/Typography/Typography'
import { Playlist } from '../types/playlist'

const fetcher = (url: string) =>
	fetch(url)
		.then(r => r.json())
		.then(r => r.results)

const Home = () => {
	const navigate = useNavigate()
	const { data, error } = useSWR('https://saavn.me/home', fetcher)

	return (
		<div className='flex flex-col'>
			{/* Header */}
			<div className='flex justify-between'>
				<Typography type='title'>Retro Music</Typography>
				<span className='flex gap-x-3'>
					<Button className='w-6 h-6' onClick={() => navigate('/search')}>
						<SearchIcon fillClassName='fill-dark-100' />
					</Button>
					<Button className='w-6 h-6'>
						<Settings fillClassName='fill-dark-100' />
					</Button>
				</span>
			</div>
			{/* Trending Section */}
			<div>
				<Typography type='subtitle'>Trending</Typography>
				{/* Card */}
				{data && !error && (
					<div className='flex overflow-x-scroll py-8 gap-x-4'>
						{data.top_playlists.map((currentItem: Playlist) => {
							const { title, image, id } = currentItem
							return (
								<div
									key={id}
									className='flex flex-col gap-y-3 w-44 neumorphism p-2 rounded-2xl shrink-0'
								>
									<img alt={title} className='rounded-2xl' src={image} />
									<Typography type='caption'>{title}</Typography>
								</div>
							)
						})}
					</div>
				)}
			</div>
		</div>
	)
}

export default Home
