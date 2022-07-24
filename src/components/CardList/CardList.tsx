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
			<div className='flex gap-x-4 overflow-x-scroll pt-8'>{children}</div>
		</div>
	)
}

export default CardList
