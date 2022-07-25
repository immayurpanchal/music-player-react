import classNames from 'classnames'
import { HTMLAttributes, PropsWithChildren } from 'react'
import Typography from '../Typography/Typography'
type Props = {
	title: string
	cardWrapperClassName?: HTMLAttributes<HTMLDivElement>['className']
}

const CardList = (props: PropsWithChildren & Props & HTMLAttributes<HTMLDivElement>) => {
	const { children, title, className, cardWrapperClassName } = props
	const cardListContainerClass = className
	const cardWrapperClass = classNames('flex gap-x-4 overflow-x-scroll', cardWrapperClassName)
	return (
		<div className={cardListContainerClass}>
			<Typography type='subtitle'>{title}</Typography>
			<div className={cardWrapperClass}>{children}</div>
		</div>
	)
}

export default CardList
