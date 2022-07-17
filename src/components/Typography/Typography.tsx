import classNames from 'classnames'
import { PropsWithChildren } from 'react'
type Props = {
	type?: 'title'
}

const Typography = (props: PropsWithChildren & Props) => {
	const { children, type } = props

	const getType = () => {
		switch (type) {
			case 'title':
				return 'font-bold text-2xl'
			default:
				return 'text-base'
		}
	}

	const typographyClass = classNames(getType())

	return <span className={typographyClass}>{children}</span>
}

export default Typography
