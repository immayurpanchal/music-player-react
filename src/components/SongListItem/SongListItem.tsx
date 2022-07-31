import classNames from 'classnames'
import React from 'react'
import Button from '../Button/Button'
import More from '../Icons/More'
import Pause from '../Icons/Pause'
import Play from '../Icons/Play'
import Polygon from '../Polygon/Polygon'
import Typography from '../Typography/Typography'

type Props = {
	name: string
	image: string
	id: string
	year: number
	isPressed: boolean
	isPlaying: boolean
}
const SongListItem = (props: Props) => {
	const { name, image, id, year, isPressed, isPlaying } = props

	const SLIContainerClassName = classNames(
		' grid grid-cols-[auto_minmax(100px,_1fr)_auto] items-center gap-x-3 rounded-2xl p-3',
		{ 'neumorphism-pressed': isPlaying }
	)

	return (
		<div key={id} className={SLIContainerClassName}>
			<Polygon id={id || ''} image={image || ''} />
			<div className='flex flex-col'>
				<Typography className='truncate'>{name}</Typography>
				<Typography className='text-dark-100' type='subCaption'>
					{year}
				</Typography>
			</div>
			{isPlaying && !isPressed && (
				<Button action='pressed' shape='circle' size='small'>
					<Pause fillClassName='fill-dark-900' />
				</Button>
			)}
			{isPlaying && isPressed && (
				<Button shape='circle' size='small'>
					<Play fillClassName='fill-dark-900' />
				</Button>
			)}
			{!isPlaying && (
				<Button className='h-6 w-6 '>
					<More fillClassName='fill-dark-100' />
				</Button>
			)}
		</div>
	)
}

export default SongListItem
