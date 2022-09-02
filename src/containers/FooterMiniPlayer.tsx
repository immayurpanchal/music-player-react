import React, { useContext } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { MiniPlayerContext } from '../App'
import MiniPlayer from '../components/MiniPlayer/MiniPlayer'
import { MiniPlayerContextType } from '../types/miniPlayer'

const FooterMiniPlayer = () => {
	const contextData = useContext<MiniPlayerContextType | null>(MiniPlayerContext)

	const isExcludedPathForMiniPlayer = currentPath => {
		const excludedPaths = ['/list', '/search', '/player']
		return excludedPaths.includes(currentPath)
	}
	return (
		<>
			<div className='mb-28'>
				<Outlet />
			</div>
			{!isExcludedPathForMiniPlayer(location.pathname) && (
				<div className='fixed bottom-0'>
					<MiniPlayer {...contextData?.miniPlayer} />
					<div>Footer</div>
				</div>
			)}
		</>
	)
}

export default FooterMiniPlayer
