import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchPage from './pages/Search'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<SearchPage />} path='/search' />
			</Routes>
		</BrowserRouter>
	)
}

export default App
