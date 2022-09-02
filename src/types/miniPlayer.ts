export interface MiniPlayerProps {
	image: string
	title: string
	artist: string
	progress: number
	isPlaying: boolean
	handleButtonClick: () => void
}

export type MiniPlayerContextType = {
	miniPlayer: MiniPlayerProps
	setMiniPlayer: (miniPlayer: MiniPlayerProps) => void
}
