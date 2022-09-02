import { useState } from 'react'
import Checkbox from '../components/Checkbox/Checkbox'
import VoiceSearch from '../components/Icons/VoiceSearch'
import MiniPlayer from '../components/MiniPlayer/MiniPlayer'

const NotFound = () => {
	const [checked, setChecked] = useState(false)
	const handleChange = (checked: boolean) => {
		setChecked(checked)
	}

	const [isPlaying, setIsPlaying] = useState(false)

	return (
		<div>
			<div>404 Page</div>
			<div className='border-2 border-solid border-dark-900  p-4'>
				<Checkbox
					checked={checked}
					fillClassName='fill-skin-500'
					heightClassName='h-6'
					text='Select All'
					widthClassName='w-6'
					onChange={handleChange}
				/>
				<div className='flex items-center justify-between gap-x-3'>
					<MiniPlayer
						artist='Arman'
						handleButtonClick={() => setIsPlaying(prevVal => !prevVal)}
						image='https://c.saavncdn.com/editorial/logo/JhakaasRemakes_20220105155217.jpg'
						isPlaying={isPlaying}
						progress={50}
						title='Piya O Re Piya'
					/>
				</div>
				<div className='shadow-inner shadow-white/50'>
					<VoiceSearch />
				</div>
			</div>
		</div>
	)
}

export default NotFound
