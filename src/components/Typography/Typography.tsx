import classNames from 'classnames'
import { HTMLAttributes, PropsWithChildren } from 'react'
type Props = {
	type?: 'title' | 'subtitle' | 'caption' | 'subCaption'
}

const Typography = (props: PropsWithChildren & Props & HTMLAttributes<HTMLSpanElement>) => {
	const { children, type, className } = props

	const getType = () => {
		switch (type) {
			case 'title': // 24px
				return 'font-bold text-2xl'
			case 'subtitle': // 20px
				return 'text-xl'
			case 'caption': // 14px
				return 'text-sm'
			case 'subCaption': // 12px
				return 'text-xs'
			default:
				return 'text-base'
		}
	}

	const typographyClass = classNames(getType(), className)

	return <span className={typographyClass}>{children}</span>
}

export default Typography
