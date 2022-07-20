type Props = {
	image: string
	id: number | string
}

const Polygon = (props: Props) => {
	const { id, image } = props
	const width = 48
	const height = 48
	return (
		<svg
			fill='none'
			height={height}
			viewBox={`0 0 ${width} ${height}`}
			width={width}
			xmlns='http://www.w3.org/2000/svg'
		>
			{/* <clipPath id={`myClipPath-${id}`}> */}
			<path
				d='M25.75 1.74241L39.4006 9.62361C41.7211 10.9634 43.1506 13.4393 43.1506 16.1188V31.8812C43.1506 34.5607 41.7211 37.0366 39.4006 38.3764L25.75 46.2576C23.4295 47.5973 20.5705 47.5973 18.25 46.2576L4.59936 38.3764C2.27886 37.0366 0.849365 34.5607 0.849365 31.8812V16.1188C0.849365 13.4393 2.27886 10.9634 4.59936 9.62361L18.25 1.74241C20.5705 0.402667 23.4295 0.402668 25.75 1.74241Z'
				fill={`url(#img-${id})`}
				// stroke='black'
			/>
			{/* </clipPath> */}
			<defs>
				<pattern
					height={height}
					id={`img-${id}`}
					patternUnits='userSpaceOnUse'
					viewBox={`0 0 ${width} ${height}`}
					width={width}
				>
					<image
						height={height}
						radius='100%'
						width={width}
						xlinkHref={image}
					></image>
				</pattern>
			</defs>
		</svg>
	)
}

export default Polygon
