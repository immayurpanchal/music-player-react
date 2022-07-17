import Typography from '../Typography/Typography'
type Props = {
	title: string
	image: string
}

const Card = (props: Props) => {
	const { title, image } = props
	return (
		<div className='flex flex-col gap-y-3 w-44 neumorphism p-2 rounded-2xl shrink-0'>
			<img alt={title} className='rounded-2xl' src={image} />
			<Typography type='caption'>{title}</Typography>
		</div>
	)
}

export default Card
