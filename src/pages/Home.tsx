import Button from '../components/Button/Button'
import SearchIcon from '../components/Icons/SearchIcon'
import Settings from '../components/Icons/Settings'
import Typography from '../components/Typography/Typography'

const Home = () => {
	return (
		<div>
			<div className='flex justify-between'>
				<Typography type='title'>Retro Music</Typography>
				<span className='flex gap-x-3'>
					<Button className='w-6 h-6'>
						<SearchIcon fillClassName='fill-dark-100' />
					</Button>
					<Button className='w-6 h-6'>
						<Settings fillClassName='fill-dark-100' />
					</Button>
				</span>
			</div>
		</div>
	)
}

export default Home
