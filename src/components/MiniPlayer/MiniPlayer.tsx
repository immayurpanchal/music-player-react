import Button from '../Button/Button'
import Pause from '../Icons/Pause'
import Play from '../Icons/Play'
import Polygon from '../Polygon/Polygon'
import Slider from '../Slider/Slider'
import Typography from '../Typography/Typography'

type MiniPlayerProps = {
	image: string
	title: string
	artist: string
	progress: number
	isPlaying: boolean
	handleButtonClick: () => void
}

const MiniPlayer = (props: MiniPlayerProps) => {
	const { image, title, artist, progress, isPlaying, handleButtonClick } = props

	return (
		<div className='neumorphism flex grow items-center	justify-between	rounded-t-3xl px-5 py-3'>
			<Polygon className='shrink-0' height='100%' id='mini-player-img' image={image} />
			<div className='flex flex-col  gap-y-2'>
				<Typography>{title}</Typography>
				<Typography className='text-dark-100' type='subCaption'>
					{artist}
				</Typography>
				<Slider currentProgressClassName='bg-skin-100' percent={progress} />
			</div>
			{isPlaying && (
				<Button action='pressed' className='shrink-0' shape='circle' onClick={handleButtonClick}>
					<Pause fillClassName='fill-dark-100' />
				</Button>
			)}
			{!isPlaying && (
				<Button shape='circle' onClick={handleButtonClick}>
					<Play fillClassName='fill-dark-100' />
				</Button>
			)}
		</div>
	)
}
export default MiniPlayer
