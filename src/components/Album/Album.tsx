import React from 'react'
import Typography from '../Typography/Typography'

type Props = {
	title: string
	image: string
}

const Album = (props: Props) => {
	const { title, image } = props

	return (
		<div className='flex w-44 flex-col gap-y-5  '>
			<img alt={title} className='neumorphism rounded-2xl p-1' src={image} />
			<Typography className='text-center' type='caption'>
				{title}
			</Typography>
		</div>
	)
}

export default Album
