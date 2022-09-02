import { Outlet } from 'react-router-dom'
import MiniPlayer from '../components/MiniPlayer/MiniPlayer'

const EnhancedMiniPlayer = () => {
	return (
		<>
			<Outlet />
			<div>
				<MiniPlayer />
			</div>
		</>
	)
}

export default EnhancedMiniPlayer
