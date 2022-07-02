import React from 'react'

const Play = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			fill='none'
			height={24}
			viewBox='0 0 24 24'
			width={24}
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M8 6.82001V17.18C8 17.97 8.87 18.45 9.54 18.02L17.68 12.84C18.3 12.45 18.3 11.55 17.68 11.15L9.54 5.98001C8.87 5.55001 8 6.03001 8 6.82001Z'
				fill='#6D81A1'
			/>
		</svg>
	)
}

export default Play
