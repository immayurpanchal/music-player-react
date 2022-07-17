import classNames from 'classnames'

type ButtonProps = {
	children: React.ReactNode
	onClick?: () => void
	action?: 'pressed' | 'default'
	shape?: 'circle' | 'square'
	className?: string
	size?: 'small' | 'large'
}
const Button = (props: ButtonProps) => {
	const { children, onClick, action, shape, className, size } = props

	const actionClass =
		action === 'pressed' ? 'neumorphism-pressed' : 'neumorphism'

	const getSize = () => {
		switch (size) {
			case 'small':
				return 'w-10 h-10'
			case 'large':
				return 'w-24 h-24 p-6'
			default:
				return 'w-14 h-14 p-4'
		}
	}

	const buttonClass = classNames(
		'flex justify-center items-center',
		{ [`rounded-full ${getSize()}`]: shape === 'circle' },
		{ [actionClass]: shape },
		className
	)
	return (
		<button className={buttonClass} onClick={onClick}>
			{children}
		</button>
	)
}

export default Button
