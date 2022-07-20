import { HTMLAttributes } from 'react'
import Typography from '../Typography/Typography'
type Props = {
	title: string
	image: string
}

const Card = (props: Props & HTMLAttributes<HTMLDivElement>) => {
	const { title, image, ...rest } = props
	return (
		<div
			className='flex flex-col gap-y-3 w-44 neumorphism p-2 rounded-2xl shrink-0'
			{...rest}
		>
			<img alt={title} className='rounded-2xl' src={image} />
			<Typography type='caption'>{title}</Typography>
		</div>
	)
}

export default Card
