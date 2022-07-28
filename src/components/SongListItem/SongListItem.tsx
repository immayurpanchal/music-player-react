import React from 'react'
import Button from '../Button/Button'
import More from '../Icons/More'
import Polygon from '../Polygon/Polygon'
import Typography from '../Typography/Typography'

type Props = {
	name: string
	image: string
	id: string
	year: number
}
const SongListItem = (props: Props) => {
	const { name, image, id, year } = props

	return (
		<div key={id} className='grid grid-cols-[auto_minmax(100px,_1fr)_auto] items-center gap-x-3 rounded-2xl p-3 '>
			<Polygon id={id || ''} image={image || ''} />
			<div className='flex flex-col'>
				<Typography className='truncate'>{name}</Typography>
				<Typography className='text-dark-100'>{year}</Typography>
			</div>
			<Button className='h-6 w-6'>
				<More fillClassName='fill-dark-100' />
			</Button>
		</div>
	)
}

export default SongListItem
