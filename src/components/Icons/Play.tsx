import React from 'react'
import { IconProps } from './types/types'

const Play = (props: React.SVGProps<SVGSVGElement> & IconProps) => {
	const { fillClassName, ...rest } = props
	return (
		<svg fill='none' height='100%' viewBox='0 0 24 24' width='100%' xmlns='http://www.w3.org/2000/svg' {...rest}>
			<path
				className={fillClassName}
				d='M8 6.82001V17.18C8 17.97 8.87 18.45 9.54 18.02L17.68 12.84C18.3 12.45 18.3 11.55 17.68 11.15L9.54 5.98001C8.87 5.55001 8 6.03001 8 6.82001Z'
			/>
		</svg>
	)
}

export default Play
