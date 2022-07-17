import SliderThumb from '../Icons/Slider/Thumb'
type SliderProps = {
	percent: number
}

const Slider = (props: SliderProps) => {
	const { percent } = props
	return (
		<span
			className='relative w-full h-1 rounded-md neumorphism-pressed shadow-slider-track'
			id='track'
		>
			<span
				className='h-1 bg-dark-100 absolute left-0 top-0 rounded-md'
				id='progress'
				style={{ width: `${percent}%` }}
			></span>
			<SliderThumb
				className='absolute top-[-10px] w-5 h-6'
				fillClassName='fill-dark-100'
				id='thumb'
				style={{ left: `${percent - 2}%` }}
				onMouseDown={e => {
					console.log('mouse down', e)
				}}
				onMouseUp={e => {
					console.log('mouse up', e)
				}}
				// onMouseMove={e => {
				// 	console.log('mouse move', e)
				// }}
			/>
		</span>
	)
}

export default Slider
