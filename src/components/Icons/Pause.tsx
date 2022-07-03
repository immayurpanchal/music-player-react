import React from 'react'

const Pause = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			fill='none'
			height='24'
			viewBox='0 0 24 24'
			width='24'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M8 19C9.1 19 10 18.1 10 17V7C10 5.9 9.1 5 8 5C6.9 5 6 5.9 6 7V17C6 18.1 6.9 19 8 19ZM14 7V17C14 18.1 14.9 19 16 19C17.1 19 18 18.1 18 17V7C18 5.9 17.1 5 16 5C14.9 5 14 5.9 14 7Z'
				fill='#041F1E'
			/>
		</svg>
	)
}

export default Pause