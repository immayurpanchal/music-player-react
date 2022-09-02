import React from 'react'
import { MiniPlayerContextType, MiniPlayerProps } from '../types/miniPlayer'

export const miniPlayerInitialValue = {
	image: '',
	title: '',
	artist: '',
	progress: 0,
	isPlaying: false,
	handleButtonClick: () => {}
}

export const MiniPlayerContext = React.createContext<MiniPlayerContextType>({
	miniPlayer: miniPlayerInitialValue as MiniPlayerProps,
	setMiniPlayer: () => {}
})
