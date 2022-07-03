const Slider = () => {
	return (
		<svg
			width='239'
			height='32'
			viewBox='0 0 239 32'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g filter='url(#filter0_i_0_1)'>
				<rect y='11' width='100%' height='4' rx='2' fill='#E4F0FA' />
			</g>
			<rect y='11' width='89.1791' height='4' rx='2' fill='#6D81A1' />
			<g filter='url(#filter1_d_0_1)'>
				<path
					d='M89.0448 4.73205C90.9012 3.66025 93.1884 3.66025 95.0448 4.73205L97.7051 6.26795C99.5615 7.33975 100.705 9.32051 100.705 11.4641V14.5359C100.705 16.6795 99.5615 18.6603 97.7051 19.732L95.0448 21.268C93.1884 22.3397 90.9012 22.3397 89.0448 21.268L86.3845 19.732C84.5281 18.6603 83.3845 16.6795 83.3845 14.5359V11.4641C83.3845 9.32051 84.5281 7.33975 86.3845 6.26795L89.0448 4.73205Z'
					fill='#6D81A1'
					x={1000}
				/>
				<path
					d='M89.7948 6.03109C91.1871 5.22724 92.9025 5.22724 94.2948 6.03109L96.9551 7.56699C98.3474 8.37083 99.2051 9.85641 99.2051 11.4641V14.5359C99.2051 16.1436 98.3474 17.6292 96.9551 18.433L94.2948 19.9689C92.9025 20.7728 91.1871 20.7728 89.7948 19.9689L87.1345 18.433L86.3845 19.732L87.1345 18.433C85.7422 17.6292 84.8845 16.1436 84.8845 14.5359V11.4641C84.8845 9.85641 85.7422 8.37083 87.1345 7.56699L89.7948 6.03109Z'
					stroke='white'
					stroke-width='3'
				/>
			</g>
			<defs>
				<filter
					id='filter0_i_0_1'
					x='0'
					y='11'
					width='239'
					height='8'
					filterUnits='userSpaceOnUse'
					color-interpolation-filters='sRGB'
				>
					<feFlood flood-opacity='0' result='BackgroundImageFix' />
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='BackgroundImageFix'
						result='shape'
					/>
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset dy='4' />
					<feGaussianBlur stdDeviation='2' />
					<feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0.0156863 0 0 0 0 0.121569 0 0 0 0 0.117647 0 0 0 0.25 0'
					/>
					<feBlend mode='normal' in2='shape' result='effect1_innerShadow_0_1' />
				</filter>
				<filter
					id='filter1_d_0_1'
					x='77.3845'
					y='0.928192'
					width='29.3206'
					height='30.1436'
					filterUnits='userSpaceOnUse'
					color-interpolation-filters='sRGB'
				>
					<feFlood flood-opacity='0' result='BackgroundImageFix' />
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset dy='3' />
					<feGaussianBlur stdDeviation='3' />
					<feComposite in2='hardAlpha' operator='out' />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0.6 0 0 0 0 0.339178 0 0 0 0 0.3025 0 0 0 0.25 0'
					/>
					<feBlend
						mode='normal'
						in2='BackgroundImageFix'
						result='effect1_dropShadow_0_1'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect1_dropShadow_0_1'
						result='shape'
					/>
				</filter>
			</defs>
		</svg>
	)
}

export default Slider
