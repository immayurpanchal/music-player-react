import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchPage from './pages/Search'
import Player from './pages/Player'
import NotFound from './pages/NotFound'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<SearchPage />} path='/search' />
				<Route element={<Player />} path='/player' />
				<Route element={<NotFound />} path='/404' />
			</Routes>
		</BrowserRouter>
	)
}

export default App
