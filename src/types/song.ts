export interface ImageEntityOrDownloadUrlEntity {
	quality: string
	link: string
}

export interface Album {
	id: string
	name: string
	url: string
}

export interface Song {
	id: string
	name: string
	album: Album
	year: string
	releaseDate: string
	duration: string
	label: string
	primaryArtists: string
	primaryArtistsId: string
	explicitContent: number
	playCount: string
	language: string
	hasLyrics: string
	artist: string
	image?: ImageEntityOrDownloadUrlEntity[]
	url: string
	copyright: string
	downloadUrl?: ImageEntityOrDownloadUrlEntity[]
}
