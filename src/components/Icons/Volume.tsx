import React from 'react'
import { IconProps } from './types/types'

const Volume = (props: React.SVGProps<SVGSVGElement> & IconProps) => {
	const { fillClassName, ...rest } = props
	return (
		<svg fill='none' height='100%' viewBox='0 0 24 24' width='100%' xmlns='http://www.w3.org/2000/svg' {...rest}>
			<path
				className={fillClassName}
				d='M3 9.99999V14C3 14.55 3.45 15 4 15H7L10.29 18.29C10.92 18.92 12 18.47 12 17.58V6.40999C12 5.51999 10.92 5.06999 10.29 5.69999L7 8.99999H4C3.45 8.99999 3 9.44999 3 9.99999ZM16.5 12C16.5 10.23 15.48 8.70999 14 7.96999V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 4.44999V4.64999C14 5.02999 14.25 5.35999 14.6 5.49999C17.18 6.52999 19 9.05999 19 12C19 14.94 17.18 17.47 14.6 18.5C14.24 18.64 14 18.97 14 19.35V19.55C14 20.18 14.63 20.62 15.21 20.4C18.6 19.11 21 15.84 21 12C21 8.15999 18.6 4.88999 15.21 3.59999C14.63 3.36999 14 3.81999 14 4.44999Z'
			/>
		</svg>
	)
}

export default Volume
