import { useState } from 'react'
import Checkbox from '../components/Checkbox/Checkbox'
import Slider from '../components/Slider/Slider'

const NotFound = () => {
	const [checked, setChecked] = useState(false)
	const handleChange = (checked: boolean) => {
		setChecked(checked)
	}

	return (
		<div>
			<div>404 Page</div>
			<div className='border-dark-900 border-solid border-2 p-4'>
				<Checkbox
					checked={checked}
					fillClassName='fill-skin-500'
					heightClassName='h-6'
					text='Select All'
					widthClassName='w-6'
					onChange={handleChange}
				/>
				<div className='flex justify-between items-center gap-x-3'>
					<Slider percent={50} />
				</div>
			</div>
		</div>
	)
}

export default NotFound
