import { useRef, useState } from 'react'
import useSWR from 'swr'
import fetch from 'unfetch'
import BackChevron from '../components/Icons/BackChevron'
import KeyboardIcon from '../components/Icons/Keyboard'
import SearchIcon from '../components/Icons/SearchIcon'

const fetcher = url => fetch(url).then(r => r.json())

const SearchPage = () => {
	const inputRef = useRef<HTMLInputElement>(null)
	const [searchValue, setSearchValue] = useState('')
	const { data, error } = useSWR(
		searchValue
			? `https://saavn.me/search/songs?query=${searchValue}&page=1&limit=5`
			: '',
		fetcher
	)

	if (error) {
		return <div>failed to load</div>
	}

	return (
		<div className='flex flex-col gap-y-7 grid-flow-row'>
			<div className='flex justify-between items-center'>
				<div className='w-12 h-12 rounded-full flex justify-center items-center neumorphism'>
					<BackChevron />
				</div>
				<span className='font-semibold text-2xl'>Search</span>
				<KeyboardIcon />
			</div>
			<div className='relative'>
				<span className='absolute inset-y-4 pl-6 text-gray-500 sm:text-sm pointer-events-none'>
					<SearchIcon />
				</span>
				<form
					onSubmit={e => {
						e.preventDefault()
						setSearchValue(inputRef.current?.value || '')
					}}
				>
					<input
						className='py-3 pl-14 rounded-2xl pr-4 bg-transparent w-full neumorphism focus-visible:outline-0 text-lg placeholder:text-dark-100 '
						placeholder='Search Your Music'
						type='search'
						ref={inputRef}
					/>
				</form>
			</div>
			<span className='text-lg text-dark-100'>Recently Searched</span>
			<div className='flex flex-col gap-10'>
				{data?.results?.map(song => {
					const { image, name, id, year } = song
					return (
						<div className='flex items-center gap-3' key={id}>
							<img
								src={image?.[2]?.link}
								className={`rotate-45 w-[60px] h-[60px] rounded-xl bg-cover row-span-2 mx-4`}
							/>
							<div className='flex flex-col'>
								<span className='text-base'>{name}</span>
								<span className='text-xs text-dark-100'>{year}</span>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default SearchPage
