import { useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Button from '../components/Button/Button'
import BackChevron from '../components/Icons/BackChevron'
import Disk from '../components/Icons/Disk'
import Heart from '../components/Icons/Heart'
import More from '../components/Icons/More'
import Mute from '../components/Icons/Mute'
import Next from '../components/Icons/Next'
import Pause from '../components/Icons/Pause'
import Play from '../components/Icons/Play'
import Playlist from '../components/Icons/Playlist'
import Previous from '../components/Icons/Previous'
import Random from '../components/Icons/Random'
import Repeat from '../components/Icons/Repeat'
import Volume from '../components/Icons/Volume'

type PlayerProps = {
	singer: string
	title: string
	trackSrc: string
	image: string
}

const Player = () => {
	const { state } = useLocation()
	const { singer, title, trackSrc, image } = state as PlayerProps
	const playerRef = useRef<HTMLAudioElement>(null)
	const [isPlaying, setIsPlaying] = useState(true)

	const onPlay = () => {
		if (playerRef.current) {
			playerRef.current.play()
			setIsPlaying(true)
		}
	}

	const onPause = () => {
		if (playerRef.current) {
			playerRef.current.pause()
			setIsPlaying(false)
		}
	}

	const handleBack = () => {
		console.warn('back')
	}

	const handlePlaylistMenu = () => {
		console.warn('playlist menu')
	}

	const handleMore = () => {
		console.warn('more')
	}

	const handleNext = () => {
		console.warn('next')
	}

	const handlePrevious = () => {
		console.warn('previous')
	}

	const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (playerRef.current) {
			playerRef.current.volume = +Number(+e.target.value / 100).toFixed(2)
		}
	}

	return (
		<div className='grid gap-y-16'>
			<div className='flex justify-between items-center'>
				<Button shape='circle' onClick={handleBack}>
					<BackChevron />
				</Button>
				<span className='text-2xl'>Now Playing</span>
				<Button shape='circle' onClick={handlePlaylistMenu}>
					<Playlist />
				</Button>
				<Button shape='circle' onClick={handleMore}>
					<More />
				</Button>
			</div>
			<div className='justify-self-center'>
				<div className='relative'>
					<Disk image={image} />
					{/* <RangeSlider /> */}
					{/* <img
						src={image}
						alt='Poster'
						className='absolute w-32 h-32 rounded-full'
					/> */}
					<audio ref={playerRef} autoPlay src={trackSrc} />
				</div>
			</div>
			<div className='flex flex-col text-center'>
				<span className='text-xl'>{title}</span>
				<span className='text-xs'>{singer}</span>
			</div>
			<div className='flex justify-center gap-x-4 items-center'>
				<Button shape='circle' onClick={handlePrevious}>
					<Previous />
				</Button>
				{!isPlaying && (
					<Button className='w-20 h-20' shape='circle' onClick={onPlay}>
						<Play className='w-10 h-10' />
					</Button>
				)}
				{isPlaying && (
					<Button
						action='pressed'
						className='w-20 h-20'
						shape='circle'
						onClick={onPause}
					>
						<Pause />
					</Button>
				)}
				<Button shape='circle' onClick={handleNext}>
					<Next />
				</Button>
			</div>
			<div className='flex justify-between items-center gap-x-3'>
				<Volume />
				<input
					className='grow items-center rounded-xl appearance-none h-1 p-0 bg-transparent focus:outline-none focus:ring-1 focus:shadow-none'
					id='volume-slider'
					max={100}
					min={0}
					name='volume-slider'
					type='range'
					onChange={handleVolumeChange}
				/>
				<Mute />
			</div>
			<div className='flex justify-between'>
				<Button shape='circle'>
					<Heart />
				</Button>
				<Button shape='circle'>
					<Random />
				</Button>
				<Button shape='circle'>
					<Repeat />
				</Button>
			</div>
		</div>
	)
}

export default Player
