import useSWR from 'swr'
import Album from '../components/Album/Album'
import Button from '../components/Button/Button'
import More from '../components/Icons/More'
import SearchIcon from '../components/Icons/SearchIcon'
import Typography from '../components/Typography/Typography'
import { Album as AlbumType } from '../types/album'

const fetcher = (url: string) =>
	fetch(url)
		.then(r => r.json())
		.then(r => r.results)

const EnhancedAlbum = () => {
	const { data, error } = useSWR('https://saavn.me/home', fetcher)

	if (error) {
		return <div>failed to load</div>
	}

	if (!data && !error) {
		return <div>Loading...</div>
	}

	const { new_albums: albums = [] } = data

	return (
		<div>
			<div className='flex justify-between px-5 pb-6 pt-5 '>
				<Typography type='title'>Album</Typography>
				<span className='flex  justify-between'>
					<Button className='h-6 w-6'>
						<SearchIcon fillClassName='fill-dark-100' />
					</Button>
					<Button className='h-6 w-6'>
						<More fillClassName='fill-dark-100' />
					</Button>
				</span>
			</div>
			<div className=' box-border flex flex-wrap gap-x-5 gap-y-8 px-5'>
				{albums.map((currItem: AlbumType) => {
					return <Album key={currItem.id} image={currItem.image.replace('150x150', '500x500')} title={currItem.title} />
				})}
			</div>
		</div>
	)
}

export default EnhancedAlbum
