import classNames from 'classnames'
import React, { useRef } from 'react'
import Tick from '../Icons/Tick'

type CheckboxProps = {
	checked?: boolean
	onChange?: (checked: boolean) => void
	widthClassName?: React.SVGAttributes<SVGSVGElement>['className']
	heightClassName?: React.SVGAttributes<SVGSVGElement>['className']
	fillClassName?: React.SVGAttributes<SVGSVGElement>['className']
	text: string
}

const Checkbox = (props: CheckboxProps) => {
	const { checked = false, widthClassName = '', heightClassName = '', fillClassName, onChange, text } = props

	const inputRef = useRef<HTMLInputElement>(null)

	const containerClassName = classNames(
		'bg-grey-50 rounded-lg relative p-1 focus-visible:outline focus-visible:outline-1 focus-visible:outline-dark-100 focus-visible:outline-offset-1',
		{
			[widthClassName]: widthClassName,
			[heightClassName]: heightClassName,
			'neumorphism-pressed': checked,
			neumorphism: !checked
		}
	)

	const handleClick = () => {
		if (inputRef.current) {
			inputRef.current.checked = !inputRef.current.checked
			onChange && onChange(inputRef.current.checked)
		}
	}

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' || e.key === ' ') {
			handleClick()
		}
	}

	return (
		<label
			className='relative flex select-none items-center gap-x-2 text-base'
			htmlFor='checkbox-custom'
			id='checkbox'
			onClick={handleClick}
		>
			<div className={containerClassName} tabIndex={0} onKeyDown={handleKeyDown}>
				{checked && <Tick fillClassName={fillClassName} />}
			</div>
			{text}
			<input ref={inputRef} className='absolute hidden' name='checkbox-custom' type='checkbox' />
		</label>
	)
}

export default Checkbox
