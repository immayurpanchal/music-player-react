import classNames from 'classnames'

type ButtonProps = {
	children: React.ReactNode
	onClick?: () => void
	action?: 'pressed' | 'default'
	shape?: 'circle' | 'default'
	className?: string
}
const Button = (props: ButtonProps) => {
	const { children, onClick, action, shape, className } = props

	const shapeClass = shape === 'circle' ? 'rounded-full' : 'rounded-4xl'
	const actionClass =
		action === 'pressed' ? 'neumorphism-pressed' : 'neumorphism'

	const buttonClass = classNames(
		'flex justify-center items-center',
		shapeClass,
		actionClass,
		{ 'w-12 h-12': shape === 'circle' },
		className
	)
	return (
		<button className={buttonClass} onClick={onClick}>
			{children}
		</button>
	)
}

export default Button
