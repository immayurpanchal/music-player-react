import React from 'react'

type DiskProps = {
	image: string
}

const Disk = (props: React.SVGProps<SVGSVGElement> & DiskProps) => {
	const { image, ...rest } = props
	return (
		<svg fill='none' height='280' viewBox='0 0 280 280' width='280' xmlns='http://www.w3.org/2000/svg' {...rest}>
			<g filter='url(#filter0_d_915_6913)'>
				<circle cx='140' cy='134' fill='url(#paint0_linear_915_6913)' r='130' />
				<circle cx='140' cy='134' fill='url(#paint1_linear_915_6913)' r='124' />
				<circle cx='140' cy='134' fill='url(#paint2_linear_915_6913)' r='117' />
				<circle cx='140' cy='134' fill='url(#paint3_linear_915_6913)' r='110' />
				<circle cx='140' cy='134' fill='url(#paint4_linear_915_6913)' r='102' />
				<circle cx='140' cy='134' fill='url(#paint5_linear_915_6913)' r='95' />
				<circle cx='140' cy='134' fill='url(#img)' r='75' />
			</g>
			<defs>
				<filter
					colorInterpolationFilters='sRGB'
					filterUnits='userSpaceOnUse'
					height='280'
					id='filter0_d_915_6913'
					width='280'
					x='0'
					y='0'
				>
					<feFlood floodOpacity='0' result='BackgroundImageFix' />
					<feColorMatrix
						in='SourceAlpha'
						result='hardAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
					/>
					<feOffset dy='6' />
					<feGaussianBlur stdDeviation='5' />
					<feComposite in2='hardAlpha' operator='out' />
					<feColorMatrix type='matrix' values='0 0 0 0 0.0156863 0 0 0 0 0.121569 0 0 0 0 0.117647 0 0 0 0.25 0' />
					<feBlend in2='BackgroundImageFix' mode='normal' result='effect1_dropShadow_915_6913' />
					<feBlend in='SourceGraphic' in2='effect1_dropShadow_915_6913' mode='normal' result='shape' />
				</filter>
				<linearGradient gradientUnits='userSpaceOnUse' id='paint0_linear_915_6913' x1='83' x2='212' y1='20' y2='244'>
					<stop stopColor='#041F1E' />
					<stop offset='0.512321' stopColor='#596767' />
					<stop offset='1' stopColor='#041F1E' />
				</linearGradient>
				<linearGradient
					gradientUnits='userSpaceOnUse'
					id='paint1_linear_915_6913'
					x1='85.6308'
					x2='208.677'
					y1='25.2615'
					y2='238.923'
				>
					<stop stopColor='#041F1E' />
					<stop offset='0.512321' stopColor='#596767' />
					<stop offset='1' stopColor='#041F1E' />
				</linearGradient>
				<linearGradient
					gradientUnits='userSpaceOnUse'
					id='paint2_linear_915_6913'
					x1='88.7'
					x2='204.8'
					y1='31.4'
					y2='233'
				>
					<stop stopColor='#041F1E' />
					<stop offset='0.512321' stopColor='#596767' />
					<stop offset='1' stopColor='#041F1E' />
				</linearGradient>
				<linearGradient
					gradientUnits='userSpaceOnUse'
					id='paint3_linear_915_6913'
					x1='91.7692'
					x2='200.923'
					y1='37.5385'
					y2='227.077'
				>
					<stop stopColor='#041F1E' />
					<stop offset='0.512321' stopColor='#596767' />
					<stop offset='1' stopColor='#041F1E' />
				</linearGradient>
				<linearGradient
					gradientUnits='userSpaceOnUse'
					id='paint4_linear_915_6913'
					x1='95.2769'
					x2='196.492'
					y1='44.5538'
					y2='220.308'
				>
					<stop stopColor='#041F1E' />
					<stop offset='0.512321' stopColor='#596767' />
					<stop offset='1' stopColor='#041F1E' />
				</linearGradient>
				<linearGradient
					gradientUnits='userSpaceOnUse'
					id='paint5_linear_915_6913'
					x1='98.3462'
					x2='192.615'
					y1='50.6923'
					y2='214.385'
				>
					<stop stopColor='#041F1E' />
					<stop offset='0.512321' stopColor='#596767' />
					<stop offset='1' stopColor='#041F1E' />
				</linearGradient>
				<linearGradient
					gradientUnits='userSpaceOnUse'
					id='paint6_linear_915_6913'
					x1='107.115'
					x2='181.538'
					y1='68.2308'
					y2='197.462'
				>
					<stop stopColor='#041F1E' />
					<stop offset='0.512321' stopColor='#596767' />
					<stop offset='1' stopColor='#041F1E' />
				</linearGradient>
				<pattern height={280} id='img' patternUnits='userSpaceOnUse' viewBox='0 0 280 280' width={280}>
					<image
						height={150}
						radius='100%'
						style={{ transform: 'translate(64px, 58px)' }}
						width={150}
						xlinkHref={image}
					></image>
				</pattern>
			</defs>
		</svg>
	)
}

export default Disk
