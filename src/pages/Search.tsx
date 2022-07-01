import BackChevron from '../components/Icons/BackChevron'
import KeyboardIcon from '../components/Icons/Keyboard'
import SearchIcon from '../components/Icons/SearchIcon'

const SearchPage = () => {
	return (
		<div className='grid grid-rows-4 gap-y-7'>
			<div className='flex justify-between items-center'>
				<div className='w-12 h-12 rounded-full flex justify-center items-center neumorphism'>
					<BackChevron />
				</div>
				<span className='font-semibold text-2xl'>Search</span>
				<KeyboardIcon />
			</div>
			<div className='relative'>
				{/* <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'> */}
				<span className='absolute inset-y-4 pl-6 text-gray-500 sm:text-sm pointer-events-none'>
					<SearchIcon />
				</span>
				{/* </div> */}
				<input
					className='py-3 pl-14 rounded-2xl pr-4 bg-transparent w-full neumorphism focus-visible:outline-0 text-lg '
					placeholder='Search Your Music'
					type='search'
				/>
			</div>
			<span>Recently Searched</span>
			<div>
				<img src='' alt='' />
				<span>Sara Sari</span>
				<span>Anurag Kulkarni</span>
			</div>
		</div>
	)
}

export default SearchPage
