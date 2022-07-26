import { useState } from 'react'
import Button from '../Button/Button'
import Pause from '../Icons/Pause'
import Play from '../Icons/Play'
import Polygon from '../Polygon/Polygon'
import Typography from '../Typography/Typography'

const MiniPlayer = () => {
	const [isPlaying, setIsPlaying] = useState(false)
	return (
		<div className='neumorphism flex justify-around	rounded-t-3xl	px-5 py-3 '>
			<Polygon
				height={60}
				id={''}
				image={'https://c.saavncdn.com/editorial/logo/JhakaasRemakes_20220105155217.jpg'}
				width={60}
			/>
			<div className='flex flex-col  gap-y-2'>
				<Typography type='subtitle'>Butta Bomma</Typography>
				<Typography className='text-dark-100' type='subCaption'>
					Armaan Malik
				</Typography>
				<div className='border-t-2'></div>
			</div>
			{isPlaying && (
				<Button action='pressed' shape='circle' onClick={() => setIsPlaying(false)}>
					<Pause fillClassName='fill-dark-100' />
				</Button>
			)}
			{!isPlaying && (
				<Button shape='circle' onClick={() => setIsPlaying(true)}>
					<Play fillClassName='fill-dark-100' />
				</Button>
			)}
		</div>
	)
}
export default MiniPlayer
