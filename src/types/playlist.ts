export interface MoreInfo {
	song_count: string
	firstname: string
	follower_count: string
	last_updated: string
	uid: string
}

export interface Playlist {
	id: string
	title: string
	subtitle: string
	type: string
	image: string
	perma_url: string
	more_info: MoreInfo
	explicit_content: string
	mini_obj: boolean
}
