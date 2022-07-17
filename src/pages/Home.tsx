import { useNavigate } from 'react-router-dom'
import useSWR from 'swr'
import Button from '../components/Button/Button'
import Card from '../components/Card/Card'
import CardList from '../components/CardList/CardList'
import SearchIcon from '../components/Icons/SearchIcon'
import Settings from '../components/Icons/Settings'
import Typography from '../components/Typography/Typography'
import { Chart } from '../types/charts'
import { Playlist } from '../types/playlist'
import { Trending } from '../types/trending'

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
			{data && !error && (
				<CardList title='Editorial Picks'>
					{data.top_playlists.map((currentItem: Playlist) => {
						const { title, image, id } = currentItem
						return <Card key={id} image={image} title={title} />
					})}
				</CardList>
			)}
			{/* Charts */}
			{data && !error && (
				<CardList title='Top Charts'>
					{data.charts.map((currentItem: Chart) => {
						return (
							<Card
								key={currentItem.id}
								image={currentItem.image}
								title={currentItem.title}
							/>
						)
					})}
				</CardList>
			)}
			{/* Trending Items */}
			{data && !error && (
				<CardList title='Trending Now'>
					{data.new_trending.map((currentItem: Trending) => {
						return (
							<Card
								key={currentItem.id}
								image={currentItem.image}
								title={currentItem.title}
							/>
						)
					})}
				</CardList>
			)}
		</div>
	)
}

export default Home
