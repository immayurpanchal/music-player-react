import SliderThumb from '../Icons/Slider/Thumb'
type SliderProps = {
	percent: number
}

const Slider = (props: SliderProps) => {
	const { percent } = props
	return (
		<span className='neumorphism-pressed relative h-1 w-full rounded-md shadow-slider-track' id='track'>
			<span
				className='absolute left-0 top-0 h-1 rounded-md bg-dark-100'
				id='progress'
				style={{ width: `${percent}%` }}
			></span>
			<SliderThumb
				className='absolute top-[-10px] h-6 w-5'
				fillClassName='fill-dark-100'
				id='thumb'
				style={{ left: `${percent - 2}%` }}
				onMouseDown={e => {
					console.warn('mouse down', e)
				}}
				onMouseUp={e => {
					console.warn('mouse up', e)
				}}
				// onMouseMove={e => {
				// 	console.log('mouse move', e)
				// }}
			/>
		</span>
	)
}

export default Slider
