export interface ArtistsEntity {
	id: string
	name: string
	role: string
	image: string
	type: string
	perma_url: string
}
export interface ArtistMap {
	primary_artists?: string[] | null
	featured_artists?: string[] | null
	artists?: ArtistsEntity[] | null
}

export interface MoreInfo {
	release_date: string
	song_count: string
	artistMap: ArtistMap
}

export interface Trending {
	id: string
	title: string
	subtitle: string
	header_desc: string
	type: string
	perma_url: string
	image: string
	language: string
	year: string
	play_count: string
	explicit_content: string
	list_count: string
	list_type: string
	list: string
	more_info: MoreInfo
	modules?: null
}
