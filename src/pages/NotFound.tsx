import { useState } from 'react'
import Checkbox from '../components/Checkbox/Checkbox'

const NotFound = () => {
	const [checked, setChecked] = useState(false)
	const handleChange = (checked: boolean) => {
		setChecked(checked)
	}

	return (
		<div>
			<div>404 Page</div>
			<div className='  border-2 border-solid border-dark-900  p-4'>
				<Checkbox
					checked={checked}
					fillClassName='fill-skin-500'
					heightClassName='h-6'
					text='Select All'
					widthClassName='w-6'
					onChange={handleChange}
				/>
				<div className='flex items-center justify-between gap-x-3'></div>
			</div>
		</div>
	)
}

export default NotFound
