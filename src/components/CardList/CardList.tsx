import { PropsWithChildren } from 'react'
import Typography from '../Typography/Typography'
type Props = {
	title: string
}
const CardList = (props: PropsWithChildren & Props) => {
	const { children, title } = props
	return (
		<div>
			<Typography type='subtitle'>{title}</Typography>
			<div className='flex overflow-x-scroll py-8 gap-x-4'>{children}</div>
		</div>
	)
}

export default CardList
