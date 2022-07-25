import React from 'react'
import { IconProps } from '../types/types'

const Thumb = (props: IconProps & React.SVGProps<SVGSVGElement>) => {
	const { fillClassName, stroke, strokeWidth, ...rest } = props

	return (
		<span draggable>
			<svg fill='none' height='100%' viewBox='0 0 18 20' width='100%' xmlns='http://www.w3.org/2000/svg' {...rest}>
				<path
					className={fillClassName}
					d='M6.79477 3.03109C8.18707 2.22724 9.90246 2.22724 11.2948 3.03109L13.955 4.56699C15.3473 5.37083 16.205 6.85641 16.205 8.4641V11.5359C16.205 13.1436 15.3473 14.6292 13.955 15.433L11.2948 16.9689C9.90246 17.7728 8.18707 17.7728 6.79477 16.9689L4.13452 15.433L3.38451 16.732L4.13451 15.433C2.74221 14.6292 1.88451 13.1436 1.88451 11.5359V8.4641C1.88451 6.85641 2.74221 5.37083 4.13451 4.56699L6.79477 3.03109Z'
					stroke={stroke || 'white'}
					strokeWidth={strokeWidth || '3'}
				/>
			</svg>
		</span>
	)
}

export default Thumb
