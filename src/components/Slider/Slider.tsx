import classNames from 'classnames'
import SliderThumb from '../Icons/Slider/Thumb'

type ThumbProps =
	| { isThumbVisible?: false; thumbFillClassName?: never }
	| { isThumbVisible: true; thumbFillClassName: string }

type SliderProps = {
	percent: number
	currentProgressClassName: string
}

const Slider = (props: SliderProps & ThumbProps) => {
	const { percent, isThumbVisible = false, currentProgressClassName, thumbFillClassName } = props
	const currentProgressClass = classNames('absolute left-0 top-0 h-1 rounded-md', currentProgressClassName)
	const thumbFillClass = classNames(thumbFillClassName)

	return (
		<span className='neumorphism-pressed relative h-1 w-full rounded-md shadow-slider-track' id='track'>
			<span className={currentProgressClass} id='progress' style={{ width: `${percent}%` }}></span>
			{isThumbVisible && (
				<SliderThumb
					className='absolute top-[-10px] h-6 w-5'
					fillClassName={thumbFillClass}
					id='thumb'
					style={{ left: `${percent}%` }}
				/>
			)}
		</span>
	)
}

export default Slider
