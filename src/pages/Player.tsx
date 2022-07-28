import { useEffect, useRef, useState } from 'react'
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

export type Song = {
	artist: string
	name: string
	downloadUrl: string
	image: string
	id?: string
	year?: number | string
}

type PlayerProps = {
	song: Song
}

const Player = (props: PlayerProps) => {
	const { song } = props || {}
	const { artist: singer, name: title, downloadUrl, image: imageUrl } = song

	const playerRef = useRef<HTMLAudioElement>(null)
	const [isPlaying, setIsPlaying] = useState(false)

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

	useEffect(() => {
		onPlay()
	}, [])

	const trackSrc = downloadUrl
	const image = imageUrl

	return (
		<div className='grid gap-y-16'>
			<div className='flex items-center justify-between'>
				<Button shape='circle' onClick={() => history.back()}>
					<BackChevron fillClassName='fill-dark-100' />
				</Button>
				<span className='text-2xl'>Now Playing</span>
				<div className='flex gap-x-3'>
					<Button onClick={handlePlaylistMenu}>
						<Playlist fillClassName='fill-dark-100' />
					</Button>
					<Button className='h-6 w-6' onClick={handleMore}>
						<More fillClassName='fill-dark-100' />
					</Button>
				</div>
			</div>
			<div className='justify-self-center'>
				<div className='relative'>
					<Disk image={image || ''} />
					<audio ref={playerRef} src={trackSrc} />
				</div>
			</div>
			<div className='flex flex-col text-center'>
				<span className='text-xl'>{title}</span>
				<span className='text-xs'>{singer}</span>
			</div>
			<div className='flex items-center justify-center gap-x-4'>
				<Button shape='circle' onClick={handlePrevious}>
					<Previous fillClassName='fill-dark-100' />
				</Button>
				{!isPlaying && (
					<Button shape='circle' size='large' onClick={onPlay}>
						<Play fillClassName='fill-dark-100' />
					</Button>
				)}
				{isPlaying && (
					<Button action='pressed' shape='circle' size='large' onClick={onPause}>
						<Pause fillClassName='fill-dark-900' />
					</Button>
				)}
				<Button shape='circle' onClick={handleNext}>
					<Next fillClassName='fill-dark-100' />
				</Button>
			</div>
			<div className='flex items-center justify-between gap-x-3'>
				<Mute className='h-6 w-6' fillClassName='fill-dark-100' />
				<input id='volume' name='volume' type='range' onChange={handleVolumeChange} />
				<Volume className='h-6 w-6' fillClassName='fill-dark-100' />
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
