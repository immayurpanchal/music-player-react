import Player from '../pages/Player'

const res = {
	status: 'SUCCESS',
	results: {
		id: '5WXAlMNt',
		name: 'Thunderclouds',
		album: {
			id: '13615087',
			name: 'Thunderclouds',
			url: 'https://www.jiosaavn.com/album/thunderclouds/tq0W-ibW-dg_'
		},
		year: '2018',
		releaseDate: '2018-08-09',
		duration: '187',
		label: 'Records/Columbia',
		primaryArtists: 'Lsd',
		primaryArtistsId: '1153577',
		explicitContent: 0,
		playCount: 8748631,
		language: 'english',
		hasLyrics: 'false',
		artist: 'Lsd',
		image: [
			{ quality: '50x50', link: 'https://c.saavncdn.com/679/Thunderclouds-English-2018-20180809032729-50x50.jpg' },
			{
				quality: '150x150',
				link: 'https://c.saavncdn.com/679/Thunderclouds-English-2018-20180809032729-150x150.jpg'
			},
			{
				quality: '500x500',
				link: 'https://c.saavncdn.com/679/Thunderclouds-English-2018-20180809032729-500x500.jpg'
			}
		],
		url: 'https://www.jiosaavn.com/song/thunderclouds/RT8zcBh9eUc',
		copyright: '(P) 2018 RECORDS, LLC / Columbia',
		downloadUrl: [
			{ quality: '12kbps', link: 'https://aac.saavncdn.com/679/b0b7a063d3efddf3a771a0dc91b30d69_12.mp4' },
			{ quality: '48kbps', link: 'https://aac.saavncdn.com/679/b0b7a063d3efddf3a771a0dc91b30d69_48.mp4' },
			{ quality: '96kbps', link: 'https://aac.saavncdn.com/679/b0b7a063d3efddf3a771a0dc91b30d69_96.mp4' },
			{ quality: '160kbps', link: 'https://aac.saavncdn.com/679/b0b7a063d3efddf3a771a0dc91b30d69_160.mp4' },
			{ quality: '320kbps', link: 'https://aac.saavncdn.com/679/b0b7a063d3efddf3a771a0dc91b30d69_320.mp4' }
		]
	}
}

const EnhancedPlayer = () => {
	const song = {
		artist: res.results.artist,
		name: res.results.name,
		downloadUrl: res.results.downloadUrl[4].link,
		image: res.results.image[2].link
	}
	return (
		<div>
			<Player song={song} />
		</div>
	)
}
export default EnhancedPlayer