// const Polygon = props => {
// 	const { width, height, className } = props
// 	return (
// 		<svg height='500' viewBox='0 0 500 500' width='500'>
// 			<clipPath id='clip-path'>
// 				<path d='M22.154,108.389 L258.274,13.5 L449.156,151.421 L487.774,429.469 L211.933,472.5 L30.981,366.577 L22.154,108.389 z'></path>
// 			</clipPath>
// 			<image
// 				clipPath='url(#clip-path)'
// 				xlinkHref='https://www.vzhurudolu.cz/assets/codepen/kubik_ig.jpg'
// 			></image>
// 		</svg>
// 	)
// }

// const Polygon = () => {
// 	return (
// 		<svg
// 			width={100}
// 			height={100}
// 			viewbox='0 0 100 100'
// 			xmlns='http://www.w3.org/2000/svg'
// 		>
// 			<clipPath id='clip-path'>
// 				<path
// 					d='
//                 M 0, 88.5
//                 C 0, 22.125 22.125, 0 88.5, 0
//                 S 177, 22.125 177, 88.5
//                     154.875, 177 88.5, 177
//                     0, 154.875 0, 88.5
//             '
// 					fill=''
// 					transform='rotate(
//                 -39,
//                 100,
//                 100
//             ) translate(
//                 11.5
//                 11.5
//             )'
// 				></path>
// 			</clipPath>
// 			<image
// 				clipPath='url(#clip-path)'
// 				height='100'
// 				width='100'
// 				xlinkHref='https://www.vzhurudolu.cz/assets/codepen/kubik_ig.jpg'
// 			></image>
// 		</svg>
// 	)
// }

const Polygon = () => {
	return (
		<svg
			fill='none'
			height='70'
			viewBox='0 0 64 70'
			width='64'
			xmlns='http://www.w3.org/2000/svg'
		>
			<clipPath id='clip-path'>
				<path
					d='M28 7.3094C30.4752 5.88034 33.5248 5.88034 36 7.3094L53.9808 17.6906C56.456 19.1197 57.9808 21.7607 57.9808 24.6188V45.3812C57.9808 48.2393 56.456 50.8803 53.9808 52.3094L36 62.6906C33.5248 64.1197 30.4752 64.1197 28 62.6906L10.0192 52.3094C7.54403 50.8803 6.01924 48.2393 6.01924 45.3812V24.6188C6.01924 21.7607 7.54403 19.1197 10.0192 17.6906L28 7.3094Z'
					fill='url(#paint0_linear_915_8337)'
				/>
			</clipPath>
			<image
				clipPath='url(#clip-path)'
				height={70}
				width={64}
				xlinkHref='https://www.vzhurudolu.cz/assets/codepen/kubik_ig.jpg'
			/>
		</svg>
	)
}
export default Polygon
