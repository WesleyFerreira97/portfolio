import React from 'react'
import './style/fonts.css'
import { useState } from 'react'
import { Carousel } from './components/Carousel'
import { AppProvider } from './providers/AppProvider'
import { Navigation } from './components/Navigation/index'

import { Home } from './pages/Home/index'

function App() {
	const [index, setIndex] = useState(0)

	return (
		<AppProvider>
			<Navigation setIndex={setIndex} />
			<Carousel newIndex={index}>
				<Home />
				<Home />
			</Carousel>
		</AppProvider>
	)
}

export default App
