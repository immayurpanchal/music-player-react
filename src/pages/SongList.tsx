import SongListItem from '../components/SongListItem/SongListItem'
import { Song } from './Player'

type Props = {
	songs: Song[]
}

const SongList = (props: Props) => {
	const { songs = [] } = props

	return (
		<div>
			{songs.map((currentSong: Song) => {
				const { name, image, id, year } = currentSong

				return (
					<SongListItem
						key={id}
						id={id}
						image={image[2].link}
						isPlaying={false}
						isPressed={false}
						name={name}
						year={year}
					/>
				)
			})}
		</div>
	)
}

export default SongList
