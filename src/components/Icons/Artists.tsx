import React from 'react'
import { IconProps } from './types/types'

const Artists = (props: React.SVGProps<SVGSVGElement> & IconProps) => {
	const { fillClassName, ...rest } = props
	return (
		<svg fill='none' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg' {...rest}>
			<path
				className={fillClassName}
				d='M21 5H23V19H21V5ZM17 5H19V19H17V5ZM14 5H2C1.45 5 1 5.45 1 6V18C1 18.55 1.45 19 2 19H14C14.55 19 15 18.55 15 18V6C15 5.45 14.55 5 14 5ZM13 17H3V7H13V17Z'
			/>
			<path
				className={fillClassName}
				d='M8.00005 11.89C9.077 11.89 9.95005 11.017 9.95005 9.94C9.95005 8.86304 9.077 7.99 8.00005 7.99C6.92309 7.99 6.05005 8.86304 6.05005 9.94C6.05005 11.017 6.92309 11.89 8.00005 11.89Z'
			/>
			<path
				className={fillClassName}
				d='M11.89 15.35C11.89 14.05 9.29998 13.4 7.99999 13.4C6.69999 13.4 4.10999 14.05 4.10999 15.35V16H11.89V15.35Z'
			/>
		</svg>
	)
}
export default Artists
