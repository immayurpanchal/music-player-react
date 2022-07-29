import classNames from 'classnames'
import React from 'react'

type ButtonProps = {
	children: React.ReactNode
	onClick?: (e: React.MouseEvent<HTMLElement>) => void
	action?: 'pressed' | 'default'
	shape?: 'circle' | 'square'
	className?: string
	size?: 'small' | 'large'
	variant?: 'primary' | 'secondary' | 'tertiary'
}
const Button = (props: ButtonProps) => {
	const { children, onClick, action, shape, className, size, variant } = props

	const actionClass = action === 'pressed' ? 'neumorphism-pressed' : 'neumorphism'

	const getSize = () => {
		switch (size) {
			case 'small':
				return 'w-10 h-10 p-2'
			case 'large':
				return 'w-24 h-24 p-6'
			default:
				return 'w-14 h-14 p-4'
		}
	}

	const getVariant = () => {
		switch (variant) {
			case 'primary':
				return 'bg-gradient-to-r from-skin-500 to-skin-100 text-white'
			case 'secondary':
				return 'bg-secondary-500'
			case 'tertiary':
				return 'bg-tertiary-500'
			default:
				return 'bg-primary-500'
		}
	}

	const buttonClass = classNames(
		'flex justify-center items-center',
		{ [`rounded-full ${getSize()}`]: shape === 'circle' },
		{ 'py-4 px-14 rounded-4xl': shape === 'square' },
		{ [actionClass]: shape },
		{ [getVariant()]: variant },
		className
	)

	const handleClick = (e: React.MouseEvent<HTMLElement>) => {
		navigator.vibrate(100)
		onClick && onClick(e)
	}
	return (
		<button className={buttonClass} onClick={handleClick}>
			{children}
		</button>
	)
}

export default Button
