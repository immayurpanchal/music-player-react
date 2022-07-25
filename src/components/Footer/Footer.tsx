import React from 'react'
import Album from '../Icons/Album'
import Artists from '../Icons/Artists'
import Playlist from '../Icons/Playlist'
import Songs from '../Icons/Songs'
import Polygon from '../Polygon/Polygon'

const Footer = () => {
	return (
		<div className='flex justify-between p-3 '>
			<Polygon id={'footer-avtar'} image='https://c.saavncdn.com/editorial/logo/JhakaasRemakes_20220105155217.jpg' />
			<Songs />
			<Album />
			<Artists />
			<Playlist />
		</div>
	)
}
export default Footer
