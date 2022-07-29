import React from 'react'
type PolygonProps = {
	width?: number | string
	height?: number | string
	image: string
	id: string
}

const Polygon = (props: React.SVGProps<SVGSVGElement> & PolygonProps) => {
	const { id, image, width, height, ...rest } = props

	let calculatedHeight = height || 50
	const calculatedWidth = width || 46

	if (typeof height === 'number' && typeof width === 'number') {
		calculatedHeight = width * (46 / 50)
	}

	return (
		<svg
			fill='none'
			height={calculatedHeight}
			viewBox='0 0 46 50'
			width={calculatedWidth}
			xmlns='http://www.w3.org/2000/svg'
			{...rest}
		>
			<path
				d='M40.7756 9.97409L27.125 2.09289C24.5724 0.619174 21.4276 0.619174 18.875 2.09289L5.22436 9.97409C2.67181 11.4478 1.09937 14.1714 1.09937 17.1188V32.8812C1.09937 35.8286 2.67181 38.5522 5.22436 40.0259L18.875 47.9071C21.4276 49.3808 24.5724 49.3808 27.125 47.9071L40.7756 40.0259C43.3282 38.5522 44.9006 35.8286 44.9006 32.8812V17.1188C44.9006 14.1714 43.3282 11.4478 40.7756 9.97409Z'
				fill={`url(#img-${id})`}
				stroke='black'
				strokeWidth='0.1'
			/>
			<defs>
				<pattern
					height={calculatedHeight}
					id={`img-${id}`}
					patternUnits='userSpaceOnUse'
					viewBox={`0 0 ${calculatedWidth} ${calculatedHeight}`}
					width={calculatedWidth}
				>
					<image height='100%' radius='100%' width='100%' xlinkHref={image}></image>
				</pattern>
			</defs>
		</svg>
	)
}

export default Polygon
